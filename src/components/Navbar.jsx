import React, { useState } from 'react';
import { ShoppingBag, Menu, X, Sparkles, MapPin } from 'lucide-react';
import logo2 from '../../img/logo2.png';

export default function Navbar({ cartCount, onOpenCart }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Producto', href: '#producto' },
    { name: 'Nutrición', href: '#nutricion' },
    { name: 'Modo de Uso', href: '#modo-uso' },
    { name: 'Tienda', href: '#tienda' },
    { name: 'Quiénes Somos', href: '#nosotros' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      backgroundColor: 'rgba(34, 34, 34, 0.92)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      transition: 'all 0.3s ease'
    }}>
      {/* Top Banner */}
      <div style={{
        backgroundColor: '#373737',
        borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
        padding: '6px 16px',
        textAlign: 'center',
        fontSize: '0.8125rem',
        color: '#e5e7eb',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        flexWrap: 'wrap'
      }}>
        <span style={{
          backgroundColor: '#ea580c',
          color: '#fff',
          padding: '2px 8px',
          borderRadius: '9999px',
          fontWeight: 700,
          fontSize: '0.7rem'
        }}>
          LANZAMIENTO AGUASCALIENTES
        </span>
        <span>❄️ Entrega con empaque térmico para mantener la cadena fría. Envío gratis desde $400 MXN o recolección en UAA.</span>
      </div>

      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '74px'
      }}>
        {/* Brand Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img
            src={logo2}
            alt="BUBBLES - Revienta la Rutina"
            style={{
              height: '48px',
              width: 'auto',
              objectFit: 'contain'
            }}
          />
        </a>

        {/* Desktop Navigation Links */}
        <div style={{
          display: 'none',
          alignItems: 'center',
          gap: '28px'
        }} className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                fontSize: '0.925rem',
                fontWeight: 500,
                color: '#d1d5db',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#f59e0b')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#d1d5db')}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          {/* Cart Button */}
          <button
            onClick={onOpenCart}
            aria-label="Abrir Carrito"
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#2b2b2b',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '9999px',
              padding: '10px 18px',
              color: '#ffffff',
              gap: '8px',
              fontSize: '0.875rem',
              fontWeight: 600,
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#383838';
              e.currentTarget.style.borderColor = '#f59e0b';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#2b2b2b';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
            }}
          >
            <ShoppingBag size={18} color="#f59e0b" />
            <span>Carrito</span>
            {cartCount > 0 && (
              <span style={{
                backgroundColor: '#ea580c',
                color: '#ffffff',
                fontSize: '0.75rem',
                fontWeight: 700,
                borderRadius: '9999px',
                padding: '2px 7px',
                minWidth: '20px',
                textAlign: 'center'
              }}>
                {cartCount}
              </span>
            )}
          </button>

          {/* Quick CTA */}
          <a
            href="#tienda"
            className="btn-primary btn-sm"
            style={{ display: 'none' }}
            id="desktop-buy-cta"
          >
            Comprar Ahora
          </a>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir Menú"
            style={{
              background: 'transparent',
              color: '#ffffff',
              padding: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            className="mobile-toggle-btn"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div style={{
          backgroundColor: '#242424',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          padding: '20px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: '1rem',
                fontWeight: 600,
                color: '#e5e7eb',
                padding: '8px 0',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
              }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#tienda"
            onClick={() => setMobileMenuOpen(false)}
            className="btn-primary"
            style={{ justifyContent: 'center', marginTop: '10px' }}
          >
            Comprar BUBBLES
          </a>
        </div>
      )}

      <style>{`
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
          #desktop-buy-cta {
            display: inline-flex !important;
          }
          .mobile-toggle-btn {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
}
