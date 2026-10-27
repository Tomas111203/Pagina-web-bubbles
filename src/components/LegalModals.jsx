import React from 'react';
import { X, ShieldCheck, Scale, FileText, AlertCircle, Building2, CheckCircle2 } from 'lucide-react';

export default function LegalModals({ activeModal, onClose }) {
  if (!activeModal) return null;

  return (
    <div className="modal-overlay" style={{ zIndex: 1200 }}>
      <div className="modal-content" style={{ maxWidth: '720px' }}>
        
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'transparent',
            color: '#9ca3af',
            border: 'none',
            padding: '6px',
            cursor: 'pointer'
          }}
          aria-label="Cerrar modal"
        >
          <X size={22} />
        </button>

        {/* 1. AVISO DE PRIVACIDAD */}
        {activeModal === 'privacidad' && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <ShieldCheck size={26} color="#f59e0b" />
              <h3 style={{ fontSize: '1.45rem', color: '#ffffff', margin: 0 }}>
                Aviso de Privacidad Integral
              </h3>
            </div>
            <div style={{ color: '#d1d5db', fontSize: '0.9rem', lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <p>
                <strong>Identidad y Domicilio del Responsable:</strong> BUBBLES Proteína Lab (Proyecto de Emprendimiento Universitario, Universidad Autónoma de Aguascalientes), con sede en la ciudad de Aguascalientes, Ags., México, es responsable del tratamiento legítimo de sus datos personales conforme a la <em>Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP)</em>.
              </p>
              <p>
                <strong>Datos Personales Recabados:</strong> Para la gestión, despacho y entrega de sus pedidos recabamos los siguientes datos: (a) Nombre completo, (b) Domicilio de entrega o punto de recolección seleccionado, (c) Número telefónico o WhatsApp de contacto, (d) Correo electrónico, y (e) En caso de requerir comprobante fiscal digital (CFDI), Registro Federal de Contribuyentes (RFC), razón social, régimen fiscal y código postal fiscal.
              </p>
              <p>
                <strong>Finalidades del Tratamiento:</strong>
                <br />• <em>Finalidades Primarias:</em> Procesar su pedido en línea, coordinar la entrega bajo cadena de frío en el municipio de Aguascalientes o Jesús María, emitir su comprobante de pago o factura CFDI 4.0, y brindar soporte directo de atención a clientes.
                <br />• <em>Finalidades Secundarias:</em> Notificarle sobre nuevos sabores, promociones de lanzamiento y encuestas de satisfacción académica y comercial (pudiendo oponerse a estas en cualquier momento).
              </p>
              <p>
                <strong>Derechos ARCO (Acceso, Rectificación, Cancelación y Oposición):</strong> Usted tiene derecho a acceder, rectificar o cancelar sus datos personales, así como a revocar el consentimiento otorgado, enviando una solicitud formal al correo <code>privacidad@bubblesproteina.com</code> o mediante nuestro canal de WhatsApp oficial.
              </p>
              <p>
                <strong>Transferencia de Datos:</strong> Sus datos no serán compartidos, vendidos ni transferidos a terceros no vinculados con la operación logística directa de su entrega.
              </p>
            </div>
          </div>
        )}

        {/* 2. TÉRMINOS Y CONDICIONES */}
        {activeModal === 'terminos' && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <Scale size={26} color="#10b981" />
              <h3 style={{ fontSize: '1.45rem', color: '#ffffff', margin: 0 }}>
                Términos y Condiciones de Compra
              </h3>
            </div>
            <div style={{ color: '#d1d5db', fontSize: '0.9rem', lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <p>
                <strong>1. Precios y Moneda:</strong> Todos los precios indicados en este sitio web están expresados en Pesos Mexicanos (MXN) e incluyen el Impuesto al Valor Agregado (IVA 16%) correspondiente conforme a las leyes fiscales vigentes en los Estados Unidos Mexicanos.
              </p>
              <p>
                <strong>2. Zona de Cobertura y Tiempos de Entrega:</strong> Durante la fase de validación de mercado y lanzamiento inicial, los envíos a domicilio operan de manera exclusiva en el municipio de Aguascalientes y zona conurbada de Jesús María, Ags. Los tiempos de despacho son de 24 a 48 horas hábiles tras la confirmación del pago.
              </p>
              <p>
                <strong>3. Punto de Recolección (Pickup):</strong> Los pedidos con modalidad de retiro en la Universidad Autónoma de Aguascalientes no generan costo de flete. El cliente recibirá un mensaje de confirmación con fecha, hora y módulo de entrega en el Campus Central de la UAA.
              </p>
              <p>
                <strong>4. Facturación Electrónica:</strong> Si requiere factura fiscal (CFDI 4.0), deberá marcar la casilla correspondiente e ingresar sus datos fiscales correctos (RFC, Régimen, CP, Uso de CFDI) durante el proceso de compra.
              </p>
            </div>
          </div>
        )}

        {/* 3. POLÍTICA DE DEVOLUCIONES (PERECEDEROS) */}
        {activeModal === 'devoluciones' && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <AlertCircle size={26} color="#ea580c" />
              <h3 style={{ fontSize: '1.45rem', color: '#ffffff', margin: 0 }}>
                Política de Cambios, Cancelaciones y Devoluciones
              </h3>
            </div>
            <div style={{ color: '#d1d5db', fontSize: '0.9rem', lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div style={{
                background: 'rgba(234, 88, 12, 0.1)',
                border: '1px solid rgba(234, 88, 12, 0.3)',
                padding: '12px 16px',
                borderRadius: '10px',
                color: '#fed7aa',
                fontWeight: 600
              }}>
                Aviso importante: Al tratarse de un producto alimenticio perecedero que requiere cadena de frío estricta (2°C a 4°C), aplican condiciones especiales de inocuidad sanitaria.
              </div>
              <p>
                <strong>1. Cancelación de Pedidos:</strong> Puede solicitar la cancelación sin costo siempre y cuando el pedido no haya sido despachado en ruta de reparto o preparado para entrega. Una vez que el paquete ha salido de refrigeración, no procede la cancelación.
              </p>
              <p>
                <strong>2. Cuándo NO aplican cambios ni devoluciones:</strong> Por disposiciones oficiales de salubridad e inocuidad alimentaria (COFEPRIS y PROFECO), no se admiten devoluciones ni reembolsos en los siguientes casos:
                <br />• Si el envase o sello de seguridad ha sido abierto o alterado por el comprador.
                <br />• Si el producto no se mantuvo en las condiciones de refrigeración recomendadas (2°C a 4°C) tras la entrega exitosa.
                <br />• Si el comprador congeló el producto en contravención de las instrucciones de la etiqueta.
                <br />• Por discrepancia subjetiva de gusto personal una vez degustado el producto.
              </p>
              <p>
                <strong>3. Casos en que SÍ aplica garantía de reposición:</strong> Procederá la reposición inmediata de su bote sin costo adicional si:
                <br />• El producto llega con daño físico imputable al transporte (envase roto o perlas rotas durante el trayecto).
                <br />• El sello hermético de fábrica llegó comprometido al momento de la recepción.
                <br /><em>Condición indispensable:</em> Deberá reportarse con fotografía y número de pedido a nuestro WhatsApp dentro de las primeras <strong>2 horas posteriores a la entrega</strong>.
              </p>
            </div>
          </div>
        )}

        {/* 4. DATOS DEL PROVEEDOR (PROFECO) */}
        {activeModal === 'profeco' && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <Building2 size={26} color="#60a5fa" />
              <h3 style={{ fontSize: '1.45rem', color: '#ffffff', margin: 0 }}>
                Datos del Proveedor & Cumplimiento PROFECO
              </h3>
            </div>
            <div style={{ color: '#d1d5db', fontSize: '0.9rem', lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <p>
                En cumplimiento con el artículo 76 BIS de la <em>Ley Federal de Protección al Consumidor (PROFECO)</em> y la <em>Norma Mexicana de Comercio Electrónico (NMX-COE-001-SCFI-2018)</em>, ponemos a disposición de los usuarios y autoridades la información de identificación del oferente:
              </p>
              <div style={{ background: '#1c1c1c', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <p style={{ margin: '0 0 6px' }}><strong>Nombre del Proyecto / Marca:</strong> BUBBLES Proteína Lab (Proyecto Emprendedores UAA 9° Semestre).</p>
                <p style={{ margin: '0 0 6px' }}><strong>Institución Vinculada:</strong> Universidad Autónoma de Aguascalientes, Centro de Ciencias Empresariales / Básicas.</p>
                <p style={{ margin: '0 0 6px' }}><strong>Domicilio para Oír y Recibir Notificaciones:</strong> Av. Universidad 940, Ciudad Universitaria, C.P. 20100, Aguascalientes, Ags., México.</p>
                <p style={{ margin: '0 0 6px' }}><strong>Teléfono / WhatsApp de Atención:</strong> +52 (449) 123-4567</p>
                <p style={{ margin: 0 }}><strong>Correo Electrónico Oficial:</strong> contacto@bubblesproteina.com</p>
              </div>
              <p style={{ fontSize: '0.85rem', color: '#9ca3af' }}>
                *Por motivos de protección de datos personales y seguridad al ser un emprendimiento estudiantil en incubación con domicilio fiscal de persona física, el domicilio físico particular se reserva y se establece el domicilio universitario institucional para todo efecto legal y de contacto con PROFECO.
              </p>
            </div>
          </div>
        )}

        {/* 5. REGULACIÓN NOM-051 Y COFEPRIS */}
        {activeModal === 'cofepris' && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <CheckCircle2 size={26} color="#34d399" />
              <h3 style={{ fontSize: '1.45rem', color: '#ffffff', margin: 0 }}>
                Cumplimiento Regulatorio: NOM-051 & COFEPRIS
              </h3>
            </div>
            <div style={{ color: '#d1d5db', fontSize: '0.9rem', lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <p>
                <strong>Etiquetado Frontal NOM-051-SCFI/SSA1-2010:</strong> Nuestro etiquetado cumple rigurosamente con los lineamientos de especificaciones generales de etiquetado para alimentos y bebidas preenvasadas. El diseño gráfico de nuestra etiqueta incluye de forma humorística e ilustrativa el sello de advertencia distintivo <em>"EXCESO PROTEÍNA"</em> como elemento de identidad de marca.
              </p>
              <div style={{
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                padding: '14px',
                borderRadius: '12px',
                color: '#a7f3d0'
              }}>
                <strong>Leyenda Precautoria Sanitaria (COFEPRIS):</strong>
                <br />
                <em>"ESTE PRODUCTO NO ES UN MEDICAMENTO. EL CONSUMO DE ESTE PRODUCTO ES RESPONSABILIDAD DE QUIEN LO RECOMIENDA Y DE QUIEN LO USA."</em>
              </div>
              <p>
                <strong>Publicidad Responsable Sin Declaraciones Engañosas:</strong> En BUBBLES promovemos una comunicación honesta y veraz. En estricto apego al Reglamento de la Ley General de Salud en Materia de Publicidad y las guías de la Comisión Federal para la Protección contra Riesgos Sanitarios (COFEPRIS), nos abstenemos deliberadamente de atribuir al producto propiedades terapéuticas, curativas, adelgazantes mágicas o de rendimiento sobrehumano sin sustento clínico. BUBBLES es un alimento funcional con proteína de suero de alta calidad destinado a complementar tu estilo de vida activo y saludable.
              </p>
              <p>
                <strong>Propiedad Industrial & Registro IMPI:</strong> El nombre comercial BUBBLES®, el logotipo representativo de la burbuja esférica con la pesa de halterofilia y el eslogan <em>“Revienta la rutina”</em> se encuentran en proceso formal de solicitud de registro de marca ante el <strong>Instituto Mexicano de la Propiedad Industrial (IMPI)</strong> conforme a la Ley Federal de Protección a la Propiedad Industrial.
              </p>
            </div>
          </div>
        )}

        {/* Bottom Close */}
        <div style={{ marginTop: '24px', textAlign: 'right' }}>
          <button onClick={onClose} className="btn-secondary btn-sm">
            Entendido y Cerrar
          </button>
        </div>

      </div>
    </div>
  );
}
