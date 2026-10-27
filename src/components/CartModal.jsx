import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  X, ShoppingBag, Trash2, Plus, Minus, ArrowRight, ShieldCheck,
  Snowflake, MapPin, CreditCard, Building2, Smartphone, CheckCircle, FileText, Copy, Check
} from 'lucide-react';

export default function CartModal({
  isOpen,
  onClose,
  cartItems,
  onUpdateQty,
  onRemoveItem,
  onClearCart
}) {
  const [step, setStep] = useState('cart'); // 'cart' -> 'checkout' -> 'success'
  const [deliveryMethod, setDeliveryMethod] = useState('shipping'); // 'shipping' or 'pickup'
  const [paymentMethod, setPaymentMethod] = useState('card'); // 'card', 'spei', 'mercadopago'
  const [needInvoice, setNeedInvoice] = useState(false);
  const [copiedClabe, setCopiedClabe] = useState(false);

  // Form states
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    neighborhood: '',
    city: 'Aguascalientes',
    references: '',
    pickupLocation: 'Campus Central UAA - Explanada Central',
    // Invoice fields
    rfc: '',
    businessName: '',
    taxRegime: '605 - Sueldos y Salarios e Ingresos Asimilados a Salarios',
    cfdiUsage: 'G03 - Gastos en general',
    zipCode: '',
    invoiceEmail: '',
    // Card fields
    cardNumber: '',
    cardExpiry: '',
    cardCvc: '',
    cardName: ''
  });

  const [orderSummary, setOrderSummary] = useState(null);

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shippingCost = deliveryMethod === 'pickup' ? 0 : subtotal >= 400 ? 0 : 45;
  const total = subtotal + shippingCost;

  const handleCopyClabe = () => {
    navigator.clipboard.writeText('646180112233445566');
    setCopiedClabe(true);
    setTimeout(() => setCopiedClabe(false), 2000);
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const orderNumber = 'BUB-' + Math.floor(100000 + Math.random() * 900000);

    const summary = {
      orderNumber,
      items: [...cartItems],
      subtotal,
      shippingCost,
      total,
      deliveryMethod,
      paymentMethod,
      customer: { ...formData },
      needInvoice,
      date: new Date().toLocaleDateString('es-MX', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    setOrderSummary(summary);
    setStep('success');

    // Trigger celebration confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ea580c', '#f59e0b', '#10b981', '#ffffff']
    });

    onClearCart();
  };

  // WhatsApp pre-formatted link
  const generateWhatsAppLink = () => {
    if (!orderSummary) return '#';
    const itemsText = orderSummary.items
      .map((i) => `• ${i.quantity}x ${i.name} (${i.flavor}) - $${i.price * i.quantity} MXN`)
      .join('%0A');

    const msg = `¡Hola BUBBLES UAA! Realicé el pedido demo *%23${orderSummary.orderNumber}*%0A%0A` +
      `*Cliente:* ${orderSummary.customer.name}%0A` +
      `*Método:* ${orderSummary.deliveryMethod === 'pickup' ? 'Recolección UAA' : 'Envío local Aguascalientes'}%0A` +
      `*Total:* $${orderSummary.total} MXN%0A%0A` +
      `*Productos:*%0A${itemsText}%0A%0A` +
      `*Método de Pago:* ${orderSummary.paymentMethod.toUpperCase()}%0A` +
      (orderSummary.needInvoice ? `*Factura CFDI solicitada:* RFC ${orderSummary.customer.rfc}%0A` : '') +
      `¡Quedo al pendiente de la confirmación!`;

    return `https://wa.me/524491234567?text=${msg}`;
  };

  return (
    <div className="modal-overlay" style={{ zIndex: 1100 }}>
      <div className="modal-content" style={{ maxWidth: '640px', padding: '0', overflow: 'hidden' }}>
        
        {/* Header */}
        <div style={{
          padding: '20px 24px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: '#282828'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShoppingBag size={20} color="#f59e0b" />
            <h3 style={{ fontSize: '1.25rem', color: '#ffffff', margin: 0 }}>
              {step === 'cart' && 'Tu Carrito de Compra'}
              {step === 'checkout' && 'Finalizar Pedido Demo'}
              {step === 'success' && '¡Pedido Registrado con Éxito!'}
            </h3>
          </div>
          <button
            onClick={onClose}
            style={{ background: 'transparent', color: '#9ca3af', padding: '4px' }}
            aria-label="Cerrar modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '24px', maxHeight: '78vh', overflowY: 'auto' }}>
          
          {/* STEP 1: CART ITEMS */}
          {step === 'cart' && (
            <div>
              {cartItems.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '48px 0' }}>
                  <ShoppingBag size={48} color="#6b7280" style={{ margin: '0 auto 16px' }} />
                  <h4 style={{ color: '#ffffff', fontSize: '1.2rem', marginBottom: '8px' }}>
                    Tu carrito está vacío
                  </h4>
                  <p style={{ color: '#9ca3af', fontSize: '0.9rem', marginBottom: '24px' }}>
                    Agrega tu presentación favorita de BUBBLES para comenzar tu pedido.
                  </p>
                  <button onClick={onClose} className="btn-primary">
                    Ver Productos
                  </button>
                </div>
              ) : (
                <div>
                  {/* Items List */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
                    {cartItems.map((item) => (
                      <div
                        key={item.id}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          background: '#1e1e1e',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                          borderRadius: '14px',
                          padding: '14px 18px',
                          gap: '12px'
                        }}
                      >
                        <div style={{ flex: 1 }}>
                          <h4 style={{ color: '#ffffff', fontSize: '1rem', margin: '0 0 4px' }}>
                            {item.name}
                          </h4>
                          <div style={{ fontSize: '0.8rem', color: '#f59e0b' }}>
                            {item.flavor}
                          </div>
                          <div style={{ fontSize: '0.875rem', color: '#d1d5db', marginTop: '4px' }}>
                            ${item.price} MXN c/u
                          </div>
                        </div>

                        {/* Quantity Controls */}
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          background: '#282828',
                          borderRadius: '8px',
                          border: '1px solid rgba(255, 255, 255, 0.1)'
                        }}>
                          <button
                            onClick={() => onUpdateQty(item.id, -1)}
                            style={{ background: 'transparent', color: '#fff', padding: '6px 10px' }}
                          >
                            <Minus size={14} />
                          </button>
                          <span style={{ padding: '0 8px', fontWeight: 700, fontSize: '0.875rem', color: '#fff' }}>
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQty(item.id, 1)}
                            style={{ background: 'transparent', color: '#fff', padding: '6px 10px' }}
                          >
                            <Plus size={14} />
                          </button>
                        </div>

                        {/* Item Total & Delete */}
                        <div style={{ textAlign: 'right', minWidth: '75px' }}>
                          <div style={{ fontWeight: 800, color: '#ffffff' }}>
                            ${item.price * item.quantity} MXN
                          </div>
                          <button
                            onClick={() => onRemoveItem(item.id)}
                            style={{ background: 'transparent', color: '#ef4444', padding: '4px', marginTop: '4px' }}
                            title="Eliminar producto"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Cold Chain Guarantee reminder */}
                  <div style={{
                    background: 'rgba(59, 130, 246, 0.1)',
                    border: '1px solid rgba(59, 130, 246, 0.25)',
                    borderRadius: '12px',
                    padding: '12px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '20px'
                  }}>
                    <Snowflake size={20} color="#60a5fa" style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: '0.85rem', color: '#bfdbfe' }}>
                      Incluye empaque térmico con gel refrigerante para entrega a 2-4°C en Aguascalientes.
                    </span>
                  </div>

                  {/* Subtotal & Free Shipping Progress */}
                  <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '16px', marginBottom: '24px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', color: '#9ca3af' }}>
                      <span>Subtotal (IVA incluido)</span>
                      <span style={{ color: '#ffffff', fontWeight: 700, fontSize: '1.1rem' }}>
                        ${subtotal} MXN
                      </span>
                    </div>

                    {subtotal >= 400 ? (
                      <div style={{ color: '#10b981', fontSize: '0.85rem', fontWeight: 600 }}>
                        ✓ ¡Felicidades! Calificas para envío gratis en Aguascalientes.
                      </div>
                    ) : (
                      <div style={{ color: '#f59e0b', fontSize: '0.825rem' }}>
                        Agrega ${400 - subtotal} MXN más para obtener envío local GRATIS.
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <button onClick={onClose} className="btn-secondary" style={{ flex: 1, justifyContent: 'center' }}>
                      Seguir Comprando
                    </button>
                    <button
                      onClick={() => setStep('checkout')}
                      className="btn-primary"
                      style={{ flex: 1.2, justifyContent: 'center' }}
                    >
                      <span>Proceder al Pago</span>
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* STEP 2: CHECKOUT FORM */}
          {step === 'checkout' && (
            <form onSubmit={handlePlaceOrder}>
              
              {/* Delivery Option Selector */}
              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, color: '#ffffff', marginBottom: '10px' }}>
                  1. Método de Entrega (Aguascalientes):
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <button
                    type="button"
                    onClick={() => setDeliveryMethod('shipping')}
                    style={{
                      background: deliveryMethod === 'shipping' ? '#373737' : '#1e1e1e',
                      border: deliveryMethod === 'shipping' ? '2px solid #f59e0b' : '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '12px',
                      padding: '14px',
                      textAlign: 'left',
                      color: '#ffffff'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, fontSize: '0.9rem', marginBottom: '4px' }}>
                      <MapPin size={16} color="#f59e0b" />
                      <span>Envío a Domicilio</span>
                    </div>
                    <div style={{ fontSize: '0.75rem', color: '#9ca3af' }}>
                      {subtotal >= 400 ? 'GRATIS (Promoción)' : '$45 MXN (24-48 hrs)'}
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setDeliveryMethod('pickup')}
                    style={{
                      background: deliveryMethod === 'pickup' ? '#373737' : '#1e1e1e',
                      border: deliveryMethod === 'pickup' ? '2px solid #10b981' : '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '12px',
                      padding: '14px',
                      textAlign: 'left',
                      color: '#ffffff'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, fontSize: '0.9rem', marginBottom: '4px' }}>
                      <CheckCircle size={16} color="#10b981" />
                      <span>Punto UAA (Pickup)</span>
                    </div>
                    <div style={{ fontSize: '0.75rem', color: '#9ca3af' }}>
                      ¡Sin costo de envío!
                    </div>
                  </button>
                </div>
              </div>

              {/* Customer Contact & Address */}
              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, color: '#ffffff', marginBottom: '10px' }}>
                  2. Datos de Contacto y Entrega:
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' }}>
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Nombre Completo"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        background: '#1a1a1a',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        borderRadius: '10px',
                        color: '#fff',
                        fontSize: '0.875rem'
                      }}
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      required
                      placeholder="Teléfono / WhatsApp (10 dígitos)"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        background: '#1a1a1a',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        borderRadius: '10px',
                        color: '#fff',
                        fontSize: '0.875rem'
                      }}
                    />
                  </div>
                </div>

                {deliveryMethod === 'shipping' ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <input
                      type="text"
                      required
                      placeholder="Calle y Número Exterior/Interior"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        background: '#1a1a1a',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        borderRadius: '10px',
                        color: '#fff',
                        fontSize: '0.875rem'
                      }}
                    />
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                      <input
                        type="text"
                        required
                        placeholder="Colonia / Fraccionamiento"
                        value={formData.neighborhood}
                        onChange={(e) => setFormData({ ...formData, neighborhood: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '10px 14px',
                          background: '#1a1a1a',
                          border: '1px solid rgba(255, 255, 255, 0.15)',
                          borderRadius: '10px',
                          color: '#fff',
                          fontSize: '0.875rem'
                        }}
                      />
                      <select
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '10px 14px',
                          background: '#1a1a1a',
                          border: '1px solid rgba(255, 255, 255, 0.15)',
                          borderRadius: '10px',
                          color: '#fff',
                          fontSize: '0.875rem'
                        }}
                      >
                        <option value="Aguascalientes">Aguascalientes (Capital)</option>
                        <option value="Jesús María">Jesús María</option>
                      </select>
                    </div>
                    <input
                      type="text"
                      placeholder="Referencias de entrega (entre qué calles, fachada, etc.)"
                      value={formData.references}
                      onChange={(e) => setFormData({ ...formData, references: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        background: '#1a1a1a',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        borderRadius: '10px',
                        color: '#fff',
                        fontSize: '0.875rem'
                      }}
                    />
                  </div>
                ) : (
                  <div style={{
                    background: '#1e1e1e',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '12px',
                    padding: '14px'
                  }}>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: '#9ca3af', marginBottom: '6px' }}>
                      Punto de Entrega UAA Seleccionado:
                    </label>
                    <select
                      value={formData.pickupLocation}
                      onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        background: '#1a1a1a',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        borderRadius: '10px',
                        color: '#fff',
                        fontSize: '0.875rem'
                      }}
                    >
                      <option value="Campus Central UAA - Explanada Central">Campus Central UAA - Explanada Central (Frente a Rectoría)</option>
                      <option value="Campus Central UAA - Cafetería Central">Campus Central UAA - Cafetería Central</option>
                      <option value="Campus Sur UAA - Entrada Principal">Campus Sur UAA - Entrada Principal</option>
                    </select>
                    <div style={{ fontSize: '0.75rem', color: '#10b981', marginTop: '6px' }}>
                      Te notificaremos por WhatsApp el día y horario exacto de entrega con tu código de retiro.
                    </div>
                  </div>
                )}
              </div>

              {/* CFDI 4.0 Invoice Request */}
              <div style={{
                background: '#1e1e1e',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '14px',
                padding: '16px',
                marginBottom: '24px'
              }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={needInvoice}
                    onChange={(e) => setNeedInvoice(e.target.checked)}
                    style={{ width: '18px', height: '18px', accentColor: '#f59e0b' }}
                  />
                  <span style={{ fontWeight: 700, color: '#ffffff', fontSize: '0.9rem' }}>
                    Solicitar Factura Fiscal (CFDI 4.0)
                  </span>
                </label>

                {needInvoice && (
                  <div style={{ marginTop: '14px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                      <input
                        type="text"
                        required={needInvoice}
                        placeholder="RFC (12 o 13 caracteres)"
                        value={formData.rfc}
                        onChange={(e) => setFormData({ ...formData, rfc: e.target.value.toUpperCase() })}
                        style={{
                          width: '100%',
                          padding: '10px 14px',
                          background: '#161616',
                          border: '1px solid rgba(255, 255, 255, 0.15)',
                          borderRadius: '8px',
                          color: '#fff',
                          fontSize: '0.85rem'
                        }}
                      />
                      <input
                        type="text"
                        required={needInvoice}
                        placeholder="Código Postal Fiscal"
                        value={formData.zipCode}
                        onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '10px 14px',
                          background: '#161616',
                          border: '1px solid rgba(255, 255, 255, 0.15)',
                          borderRadius: '8px',
                          color: '#fff',
                          fontSize: '0.85rem'
                        }}
                      />
                    </div>
                    <input
                      type="text"
                      required={needInvoice}
                      placeholder="Razón Social o Nombre Fiscal"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        background: '#161616',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        borderRadius: '8px',
                        color: '#fff',
                        fontSize: '0.85rem'
                      }}
                    />
                    <select
                      value={formData.taxRegime}
                      onChange={(e) => setFormData({ ...formData, taxRegime: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        background: '#161616',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        borderRadius: '8px',
                        color: '#fff',
                        fontSize: '0.85rem'
                      }}
                    >
                      <option value="605 - Sueldos y Salarios">605 - Sueldos y Salarios</option>
                      <option value="612 - Personas Físicas con Actividades Empresariales y Profesionales">612 - Personas Físicas con Actividades Empresariales</option>
                      <option value="626 - Régimen Simplificado de Confianza (RESICO)">626 - Régimen Simplificado de Confianza (RESICO)</option>
                      <option value="601 - General de Ley Personas Morales">601 - General de Ley Personas Morales</option>
                    </select>
                    <select
                      value={formData.cfdiUsage}
                      onChange={(e) => setFormData({ ...formData, cfdiUsage: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        background: '#161616',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        borderRadius: '8px',
                        color: '#fff',
                        fontSize: '0.85rem'
                      }}
                    >
                      <option value="G03 - Gastos en general">G03 - Gastos en general</option>
                      <option value="G01 - Adquisición de mercancías">G01 - Adquisición de mercancías</option>
                      <option value="S01 - Sin efectos fiscales">S01 - Sin efectos fiscales</option>
                    </select>
                    <input
                      type="email"
                      required={needInvoice}
                      placeholder="Correo para envío de Factura (.XML y .PDF)"
                      value={formData.invoiceEmail}
                      onChange={(e) => setFormData({ ...formData, invoiceEmail: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        background: '#161616',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        borderRadius: '8px',
                        color: '#fff',
                        fontSize: '0.85rem'
                      }}
                    />
                  </div>
                )}
              </div>

              {/* Payment Method Selector */}
              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, color: '#ffffff', marginBottom: '10px' }}>
                  3. Método de Pago Simulado:
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '14px' }}>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    style={{
                      background: paymentMethod === 'card' ? '#373737' : '#1e1e1e',
                      border: paymentMethod === 'card' ? '2px solid #f59e0b' : '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '10px',
                      padding: '10px 6px',
                      color: '#ffffff',
                      textAlign: 'center',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    <CreditCard size={18} color="#f59e0b" />
                    <span>Tarjeta</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('spei')}
                    style={{
                      background: paymentMethod === 'spei' ? '#373737' : '#1e1e1e',
                      border: paymentMethod === 'spei' ? '2px solid #60a5fa' : '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '10px',
                      padding: '10px 6px',
                      color: '#ffffff',
                      textAlign: 'center',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    <Building2 size={18} color="#60a5fa" />
                    <span>Transferencia SPEI</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('mercadopago')}
                    style={{
                      background: paymentMethod === 'mercadopago' ? '#373737' : '#1e1e1e',
                      border: paymentMethod === 'mercadopago' ? '2px solid #10b981' : '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '10px',
                      padding: '10px 6px',
                      color: '#ffffff',
                      textAlign: 'center',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    <Smartphone size={18} color="#10b981" />
                    <span>Mercado Pago</span>
                  </button>
                </div>

                {/* Sub-form according to payment method */}
                {paymentMethod === 'card' && (
                  <div style={{
                    background: '#1a1a1a',
                    padding: '14px',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 255, 255, 0.08)'
                  }}>
                    <input
                      type="text"
                      placeholder="Número de Tarjeta (Simulación: 4532 ...)"
                      value={formData.cardNumber}
                      onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px 12px',
                        background: '#111',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        borderRadius: '8px',
                        color: '#fff',
                        fontSize: '0.85rem',
                        marginBottom: '8px'
                      }}
                    />
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                      <input
                        type="text"
                        placeholder="MM/AA"
                        value={formData.cardExpiry}
                        onChange={(e) => setFormData({ ...formData, cardExpiry: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '10px 12px',
                          background: '#111',
                          border: '1px solid rgba(255, 255, 255, 0.15)',
                          borderRadius: '8px',
                          color: '#fff',
                          fontSize: '0.85rem'
                        }}
                      />
                      <input
                        type="password"
                        maxLength={4}
                        placeholder="CVV"
                        value={formData.cardCvc}
                        onChange={(e) => setFormData({ ...formData, cardCvc: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '10px 12px',
                          background: '#111',
                          border: '1px solid rgba(255, 255, 255, 0.15)',
                          borderRadius: '8px',
                          color: '#fff',
                          fontSize: '0.85rem'
                        }}
                      />
                    </div>
                  </div>
                )}

                {paymentMethod === 'spei' && (
                  <div style={{
                    background: '#1a1a1a',
                    padding: '14px',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    fontSize: '0.85rem',
                    color: '#d1d5db'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                      <span>Banco: <strong>STP / BBVA México</strong></span>
                      <button
                        type="button"
                        onClick={handleCopyClabe}
                        style={{
                          background: '#2b2b2b',
                          color: '#ffffff',
                          padding: '4px 8px',
                          borderRadius: '6px',
                          fontSize: '0.75rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}
                      >
                        {copiedClabe ? <Check size={12} color="#10b981" /> : <Copy size={12} />}
                        <span>{copiedClabe ? '¡Copiado!' : 'Copiar CLABE'}</span>
                      </button>
                    </div>
                    <div>CLABE Interbancaria: <strong style={{ color: '#60a5fa' }}>646180112233445566</strong></div>
                    <div>Beneficiario: <strong>BUBBLES PROTEÍNA UAA</strong></div>
                    <div style={{ fontSize: '0.75rem', color: '#9ca3af', marginTop: '6px' }}>
                      Al hacer clic en "Confirmar Pedido", se te reservará tu lote y podrás enviar el comprobante por WhatsApp.
                    </div>
                  </div>
                )}

                {paymentMethod === 'mercadopago' && (
                  <div style={{
                    background: 'rgba(16, 185, 129, 0.1)',
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                    padding: '14px',
                    borderRadius: '12px',
                    fontSize: '0.85rem',
                    color: '#a7f3d0'
                  }}>
                    Simulación de Checkout Pro (Mercado Pago / Stripe). Tu pago se procesará de forma segura y cifrada.
                  </div>
                )}
              </div>

              {/* Totals Summary */}
              <div style={{
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                paddingTop: '14px',
                marginBottom: '20px'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#9ca3af', fontSize: '0.875rem', marginBottom: '4px' }}>
                  <span>Subtotal</span>
                  <span>${subtotal} MXN</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#9ca3af', fontSize: '0.875rem', marginBottom: '8px' }}>
                  <span>Costo de Envío</span>
                  <span>{shippingCost === 0 ? 'GRATIS' : `$${shippingCost} MXN`}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#ffffff', fontWeight: 800, fontSize: '1.25rem' }}>
                  <span>Total a Pagar (IVA incluido)</span>
                  <span style={{ color: '#f59e0b' }}>${total} MXN</span>
                </div>
              </div>

              {/* Buttons */}
              <div style={{ display: 'flex', gap: '12px' }}>
                <button
                  type="button"
                  onClick={() => setStep('cart')}
                  className="btn-secondary"
                  style={{ flex: 1, justifyContent: 'center' }}
                >
                  Volver al Carrito
                </button>
                <button
                  type="submit"
                  className="btn-primary"
                  style={{ flex: 1.3, justifyContent: 'center' }}
                >
                  <span>Confirmar Pedido</span>
                  <ArrowRight size={18} />
                </button>
              </div>

            </form>
          )}

          {/* STEP 3: SUCCESS CONFIRMATION */}
          {step === 'success' && orderSummary && (
            <div style={{ textAlign: 'center', padding: '16px 0' }}>
              <div style={{
                width: '68px',
                height: '68px',
                borderRadius: '50%',
                background: 'rgba(16, 185, 129, 0.15)',
                color: '#10b981',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px'
              }}>
                <CheckCircle size={40} />
              </div>

              <h4 style={{ color: '#ffffff', fontSize: '1.5rem', marginBottom: '6px' }}>
                ¡Pedido #{orderSummary.orderNumber} Registrado!
              </h4>
              <p style={{ color: '#9ca3af', fontSize: '0.9rem', marginBottom: '24px' }}>
                Gracias por apoyar este proyecto de emprendimiento de la <strong>Universidad Autónoma de Aguascalientes</strong>.
              </p>

              {/* Ticket Details */}
              <div style={{
                background: '#1a1a1a',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                padding: '20px',
                textAlign: 'left',
                marginBottom: '24px',
                fontSize: '0.85rem'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '6px' }}>
                  <span style={{ color: '#9ca3af' }}>Fecha:</span>
                  <span style={{ color: '#ffffff', fontWeight: 600 }}>{orderSummary.date}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '6px' }}>
                  <span style={{ color: '#9ca3af' }}>Cliente:</span>
                  <span style={{ color: '#ffffff', fontWeight: 600 }}>{orderSummary.customer.name}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '6px' }}>
                  <span style={{ color: '#9ca3af' }}>Entrega:</span>
                  <span style={{ color: '#ffffff', fontWeight: 600 }}>
                    {orderSummary.deliveryMethod === 'pickup' ? 'Punto UAA (Recolección)' : `Domicilio en ${orderSummary.customer.city}`}
                  </span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '6px' }}>
                  <span style={{ color: '#9ca3af' }}>Empaque:</span>
                  <span style={{ color: '#60a5fa', fontWeight: 600 }}>Térmico con Gel Frío (2-4°C)</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '4px' }}>
                  <span style={{ color: '#ffffff', fontWeight: 700 }}>Total Pagado:</span>
                  <span style={{ color: '#f59e0b', fontWeight: 800, fontSize: '1rem' }}>${orderSummary.total} MXN</span>
                </div>
              </div>

              {/* Direct WhatsApp confirmation link */}
              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center', marginBottom: '12px', background: '#25D366', color: '#ffffff' }}
              >
                <span>Enviar Resumen a WhatsApp</span>
              </a>

              <button
                onClick={() => {
                  setStep('cart');
                  onClose();
                }}
                className="btn-secondary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Cerrar y Volver a la Tienda
              </button>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
