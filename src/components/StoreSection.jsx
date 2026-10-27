import React, { useState } from 'react';
import { ShoppingBag, Truck, Snowflake, MapPin, ShieldCheck, Check, Sparkles, Plus, Minus } from 'lucide-react';

export default function StoreSection({ onAddToCart }) {
  const [quantities, setQuantities] = useState({
    individual: 1,
    duo: 1,
    pro1kg: 1
  });

  const [selectedFlavors, setSelectedFlavors] = useState({
    individual: 'Chocolate Belga Intenso',
    duo: 'Chocolate Belga Intenso (x2)',
    pro1kg: 'Chocolate Belga Intenso'
  });

  const products = [
    {
      id: 'individual',
      name: 'BUBBLES Individual 500g',
      badge: 'Ideal Para Iniciar',
      badgeColor: '#60a5fa',
      price: 249,
      servings: '10 - 14 Porciones',
      description: 'Bote hermético de 500 gramos con perlas de chocolate y 20g de proteína de suero por porción.',
      features: [
        '500g de perlas explosivas',
        '20g proteína de suero por ración',
        'Empaque térmico con gel frío',
        'IVA 16% incluido en el precio'
      ],
      popular: false
    },
    {
      id: 'duo',
      name: 'BUBBLES Dúo Pack (2 x 500g)',
      badge: '¡El Más Vendido!',
      badgeColor: '#ea580c',
      price: 449,
      regularPrice: 498,
      servings: '20 - 28 Porciones',
      description: 'Dos botes de 500g. Asegura tu suministro mensual y califica para envío local GRATIS en Aguascalientes.',
      features: [
        '1,000g totales de perlas (2 botes)',
        'Envío GRATIS en Aguascalientes',
        'Ahorro directo de $49 MXN',
        'Empaque térmico reforzado'
      ],
      popular: true
    },
    {
      id: 'pro1kg',
      name: 'BUBBLES Edición Pro 1kg',
      badge: 'Presentación Gym / Familiar',
      badgeColor: '#10b981',
      price: 399,
      servings: '22 - 28 Porciones',
      description: 'Formato institucional de 1 Kilogramo neto como se muestra en la etiqueta oficial. Máximo rendimiento por tu dinero.',
      features: [
        '1 Kilogramo neto de producto',
        'Ideal para atletas y shakers diarios',
        'Sello hermético de frescura',
        'Entrega refrigerada local'
      ],
      popular: false
    }
  ];

  const handleQtyChange = (id, delta) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) + delta)
    }));
  };

  const handleAddProduct = (prod) => {
    onAddToCart({
      id: prod.id,
      name: prod.name,
      price: prod.price,
      quantity: quantities[prod.id] || 1,
      flavor: selectedFlavors[prod.id],
      servings: prod.servings
    });
  };

  return (
    <section id="tienda" className="section-padding" style={{ backgroundColor: '#1c1c1c' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 56px' }}>
          <div className="badge-tag" style={{ marginBottom: '12px' }}>
            <ShoppingBag size={14} /> Tienda Oficial en Línea
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: '#ffffff', marginBottom: '16px' }}>
            Elige tu Presentación <span className="text-gradient-gold">BUBBLES</span>
          </h2>
          <p style={{ color: '#9ca3af', fontSize: '1rem', lineHeight: 1.6 }}>
            Precios justos con IVA incluido basados en el estudio de mercado ($200 - $350 MXN). Empacado en frío con entrega express en Aguascalientes o recolección gratuita en la UAA.
          </p>
        </div>

        {/* Cold Chain & Delivery Guarantee Bar */}
        <div style={{
          background: 'linear-gradient(135deg, #2c2520 0%, #201e1c 100%)',
          border: '1px solid rgba(198, 148, 102, 0.3)',
          borderRadius: '16px',
          padding: '20px 28px',
          marginBottom: '50px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '20px',
          alignItems: 'center'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '12px',
              background: 'rgba(96, 165, 250, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#60a5fa',
              flexShrink: 0
            }}>
              <Snowflake size={22} />
            </div>
            <div>
              <div style={{ fontWeight: 700, color: '#ffffff', fontSize: '0.95rem' }}>Empaque Térmico con Gel Frío</div>
              <div style={{ fontSize: '0.8rem', color: '#9ca3af' }}>Garantizamos la cadena de frío (2-4°C) hasta tu puerta.</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '12px',
              background: 'rgba(245, 158, 11, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#f59e0b',
              flexShrink: 0
            }}>
              <Truck size={22} />
            </div>
            <div>
              <div style={{ fontWeight: 700, color: '#ffffff', fontSize: '0.95rem' }}>Entrega Express 24-48 hrs</div>
              <div style={{ fontSize: '0.8rem', color: '#9ca3af' }}>Cobertura en Aguascalientes Capital y Jesús María ($45 MXN).</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '12px',
              background: 'rgba(16, 185, 129, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#10b981',
              flexShrink: 0
            }}>
              <MapPin size={22} />
            </div>
            <div>
              <div style={{ fontWeight: 700, color: '#ffffff', fontSize: '0.95rem' }}>Punto Recolección UAA (Gratis)</div>
              <div style={{ fontSize: '0.8rem', color: '#9ca3af' }}>Pasa por tu pedido sin costo en Campus Central UAA.</div>
            </div>
          </div>
        </div>

        {/* Product Pricing Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
          gap: '28px',
          alignItems: 'stretch'
        }}>
          {products.map((prod) => (
            <div
              key={prod.id}
              style={{
                background: prod.popular ? '#282828' : '#222222',
                border: prod.popular ? '2px solid #ea580c' : '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '24px',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                boxShadow: prod.popular ? '0 15px 35px rgba(234, 88, 12, 0.25)' : 'none',
                transform: prod.popular ? 'scale(1.02)' : 'none',
                transition: 'all 0.3s ease'
              }}
            >
              {prod.popular && (
                <div style={{
                  position: 'absolute',
                  top: '-14px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'linear-gradient(135deg, #ea580c 0%, #f59e0b 100%)',
                  color: '#ffffff',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  padding: '4px 16px',
                  borderRadius: '9999px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  boxShadow: '0 4px 12px rgba(234, 88, 12, 0.4)'
                }}>
                  {prod.badge}
                </div>
              )}

              <div>
                {!prod.popular && (
                  <span style={{
                    color: prod.badgeColor,
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    {prod.badge}
                  </span>
                )}

                <h3 style={{ fontSize: '1.45rem', color: '#ffffff', marginTop: '6px', marginBottom: '8px' }}>
                  {prod.name}
                </h3>
                <div style={{ color: '#9ca3af', fontSize: '0.85rem', marginBottom: '16px' }}>
                  {prod.servings}
                </div>

                {/* Price Display */}
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '16px' }}>
                  <span style={{ fontSize: '2.5rem', fontWeight: 900, color: '#ffffff', fontFamily: 'var(--font-heading)' }}>
                    ${prod.price}
                  </span>
                  <span style={{ fontSize: '0.9rem', color: '#9ca3af' }}>MXN (IVA inc.)</span>
                  {prod.regularPrice && (
                    <span style={{ fontSize: '1rem', color: '#6b7280', textDecoration: 'line-through' }}>
                      ${prod.regularPrice} MXN
                    </span>
                  )}
                </div>

                <p style={{ color: '#d1d5db', fontSize: '0.9rem', lineHeight: 1.5, marginBottom: '20px' }}>
                  {prod.description}
                </p>

                {/* Features List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
                  {prod.features.map((feat, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#e5e7eb' }}>
                      <Check size={16} color="#10b981" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Flavor Selector */}
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: '#9ca3af', marginBottom: '6px', fontWeight: 600 }}>
                    Sabor:
                  </label>
                  <select
                    value={selectedFlavors[prod.id]}
                    onChange={(e) => setSelectedFlavors({ ...selectedFlavors, [prod.id]: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      background: '#1a1a1a',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      borderRadius: '10px',
                      color: '#ffffff',
                      fontSize: '0.875rem'
                    }}
                  >
                    <option value={prod.id === 'duo' ? 'Chocolate Belga Intenso (x2)' : 'Chocolate Belga Intenso'}>
                      {prod.id === 'duo' ? 'Chocolate Belga Intenso (x2)' : 'Chocolate Belga Intenso'}
                    </option>
                  </select>
                </div>

              </div>

              {/* Bottom Actions: Quantity & Add to Cart */}
              <div>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '14px' }}>
                  <span style={{ fontSize: '0.85rem', color: '#9ca3af', fontWeight: 600 }}>Cantidad:</span>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    background: '#1a1a1a',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: '8px',
                    padding: '2px'
                  }}>
                    <button
                      onClick={() => handleQtyChange(prod.id, -1)}
                      style={{ background: 'transparent', color: '#fff', padding: '6px 10px' }}
                      aria-label="Disminuir cantidad"
                    >
                      <Minus size={14} />
                    </button>
                    <span style={{ padding: '0 8px', fontWeight: 700, fontSize: '0.9rem', color: '#fff', minWidth: '24px', textAlign: 'center' }}>
                      {quantities[prod.id] || 1}
                    </span>
                    <button
                      onClick={() => handleQtyChange(prod.id, 1)}
                      style={{ background: 'transparent', color: '#fff', padding: '6px 10px' }}
                      aria-label="Aumentar cantidad"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => handleAddProduct(prod)}
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <ShoppingBag size={18} />
                  <span>Agregar al Carrito</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
