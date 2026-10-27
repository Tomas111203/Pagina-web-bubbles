import React from 'react';
import { MessageCircle, Mail, MapPin, Shield, Award, Sparkles } from 'lucide-react';

export default function Footer({ onOpenLegalModal }) {
  return (
    <>
      <footer style={{
        backgroundColor: '#161616',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        paddingTop: '64px',
        paddingBottom: '36px',
        color: '#9ca3af'
      }}>
        <div className="container">
          
          {/* Main Footer Columns */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '40px',
            marginBottom: '48px'
          }}>
            
            {/* Col 1: Brand & Slogan */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                <img
                  src="./img/logo1.png"
                  alt="BUBBLES Logo"
                  style={{ width: '48px', height: 'auto' }}
                />
                <div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#ffffff', fontFamily: 'var(--font-heading)', lineHeight: 1 }}>
                    BUBBLES
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#c69466', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    Revienta la Rutina
                  </div>
                </div>
              </div>

              <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: '#9ca3af', marginBottom: '18px' }}>
                Las primeras perlas explosivas de proteína de suero de leche en México. Proyecto de innovación alimentaria surgido en la <strong>Universidad Autónoma de Aguascalientes</strong>.
              </p>

              <div style={{ display: 'flex', gap: '12px' }}>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    backgroundColor: '#262626',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    border: '1px solid rgba(255, 255, 255, 0.08)'
                  }}
                  aria-label="Instagram de BUBBLES"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    backgroundColor: '#262626',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    border: '1px solid rgba(255, 255, 255, 0.08)'
                  }}
                  aria-label="Facebook de BUBBLES"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a
                  href="https://wa.me/524491234567?text=Hola,%20me%20gustaria%20saber%20mas%20de%20BUBBLES"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    backgroundColor: '#25D366',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff'
                  }}
                  aria-label="WhatsApp directo"
                >
                  <MessageCircle size={18} />
                </a>
              </div>
            </div>

            {/* Col 2: Navigation Links */}
            <div>
              <h4 style={{ color: '#ffffff', fontSize: '1rem', fontWeight: 700, marginBottom: '16px' }}>
                Navegación Rápida
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem' }}>
                <li><a href="#producto" style={{ color: '#9ca3af' }}>¿Qué es BUBBLES?</a></li>
                <li><a href="#nutricion" style={{ color: '#9ca3af' }}>Tabla Nutrimental & Alérgenos</a></li>
                <li><a href="#modo-uso" style={{ color: '#9ca3af' }}>Modo de Uso & Bebidas</a></li>
                <li><a href="#tienda" style={{ color: '#9ca3af' }}>Tienda en Línea</a></li>
                <li><a href="#nosotros" style={{ color: '#9ca3af' }}>Equipo & Origen UAA</a></li>
                <li><a href="#faq" style={{ color: '#9ca3af' }}>Preguntas Frecuentes</a></li>
              </ul>
            </div>

            {/* Col 3: Legal & Regulatory Requirements */}
            <div>
              <h4 style={{ color: '#ffffff', fontSize: '1rem', fontWeight: 700, marginBottom: '16px' }}>
                Marco Legal & Regulatorio
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.85rem' }}>
                <li>
                  <button
                    onClick={() => onOpenLegalModal('privacidad')}
                    style={{ background: 'transparent', color: '#9ca3af', textAlign: 'left', padding: 0, textDecoration: 'underline' }}
                  >
                    Aviso de Privacidad (LFPDPPP)
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onOpenLegalModal('terminos')}
                    style={{ background: 'transparent', color: '#9ca3af', textAlign: 'left', padding: 0, textDecoration: 'underline' }}
                  >
                    Términos y Condiciones de Compra
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onOpenLegalModal('devoluciones')}
                    style={{ background: 'transparent', color: '#9ca3af', textAlign: 'left', padding: 0, textDecoration: 'underline' }}
                  >
                    Política de Cambios y Devoluciones
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onOpenLegalModal('profeco')}
                    style={{ background: 'transparent', color: '#9ca3af', textAlign: 'left', padding: 0, textDecoration: 'underline' }}
                  >
                    Datos del Proveedor (PROFECO)
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onOpenLegalModal('cofepris')}
                    style={{ background: 'transparent', color: '#f59e0b', textAlign: 'left', padding: 0, textDecoration: 'underline', fontWeight: 600 }}
                  >
                    Cumplimiento NOM-051, COFEPRIS & IMPI
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 4: Contact & Location */}
            <div>
              <h4 style={{ color: '#ffffff', fontSize: '1rem', fontWeight: 700, marginBottom: '16px' }}>
                Atención y Contacto
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.875rem' }}>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <MapPin size={18} color="#f59e0b" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>Universidad Autónoma de Aguascalientes, Ciudad Universitaria, Aguascalientes, Ags.</span>
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <Mail size={18} color="#60a5fa" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <a href="mailto:contacto@bubblesproteina.com" style={{ color: '#ffffff' }}>contacto@bubblesproteina.com</a>
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <MessageCircle size={18} color="#25D366" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <a
                    href="https://wa.me/524491234567?text=Hola,%20quisiera%20pedir%20informes%20de%20BUBBLES"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: '#ffffff' }}
                  >
                    WhatsApp: +52 (449) 123-4567
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Bar & Disclaimers */}
          <div style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '24px',
            fontSize: '0.78rem',
            color: '#6b7280',
            lineHeight: 1.6
          }}>
            <p style={{ marginBottom: '8px' }}>
              © {new Date().getFullYear()} BUBBLES®. Marca en trámite de registro ante el Instituto Mexicano de la Propiedad Industrial (IMPI). Desarrollado con orgullo en la Universidad Autónoma de Aguascalientes para la materia de Emprendedores (9° Semestre).
            </p>
            <p style={{ margin: 0 }}>
              <strong>Advertencia Sanitaria:</strong> Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien lo recomienda y de quien lo usa. Cumple con la normatividad sanitaria mexicana aplicable y etiquetado NOM-051.
            </p>
          </div>

        </div>
      </footer>

      {/* Floating WhatsApp Quick Action Button */}
      <a
        href="https://wa.me/524491234567?text=Hola,%20quiero%20hacer%20un%20pedido%20de%20BUBBLES%20Proteina"
        target="_blank"
        rel="noreferrer"
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 999,
          backgroundColor: '#25D366',
          color: '#ffffff',
          borderRadius: '9999px',
          padding: '12px 20px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          boxShadow: '0 8px 25px rgba(37, 211, 102, 0.45)',
          fontWeight: 700,
          fontSize: '0.9rem',
          transition: 'all 0.2s ease',
          textDecoration: 'none'
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-3px)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
      >
        <MessageCircle size={22} fill="#ffffff" color="#25D366" />
        <span className="wa-text">Pedir por WhatsApp</span>
      </a>

      <style>{`
        @media (max-width: 600px) {
          .wa-text {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
