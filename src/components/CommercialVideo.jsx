import React from 'react';
import { Film, Play, Sparkles, ExternalLink, Flame, ShieldCheck } from 'lucide-react';

export default function CommercialVideo() {
  const videoId = '_EGy6XYuZxU';
  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1`;
  const youtubeWatchUrl = `https://youtu.be/${videoId}?si=n2HSxdqOr92iMnqo`;

  return (
    <section id="comercial" className="section-padding" style={{ backgroundColor: '#181818', position: 'relative' }}>
      {/* Decorative ambient background glow */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '600px',
        maxWidth: '90%',
        height: '350px',
        background: 'radial-gradient(circle, rgba(234, 88, 12, 0.15) 0%, rgba(84, 49, 28, 0.08) 50%, transparent 70%)',
        pointerEvents: 'none',
        filter: 'blur(60px)',
        zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px' }}>
          <div className="badge-tag" style={{ marginBottom: '14px' }}>
            <Film size={14} /> Spot Publicitario Oficial
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: '#ffffff', marginBottom: '16px' }}>
            Vive la Experiencia <span className="text-gradient-gold">BUBBLES</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#9ca3af', lineHeight: 1.6 }}>
            Descubre en nuestro comercial oficial cómo transformamos la suplementación tradicional en una divertida explosión de sabor, frescura y energía. ¡Revienta la rutina en cada sorbo!
          </p>
        </div>

        {/* Video Cinema Container */}
        <div style={{
          maxWidth: '920px',
          margin: '0 auto',
          background: 'linear-gradient(145deg, rgba(45, 45, 45, 0.9) 0%, rgba(28, 28, 28, 0.95) 100%)',
          border: '1px solid rgba(245, 158, 11, 0.25)',
          borderRadius: '24px',
          padding: '16px',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.7), 0 0 40px rgba(234, 88, 12, 0.12)'
        }}>
          {/* Top Bar Decoration */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '8px 14px 16px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            marginBottom: '16px',
            fontSize: '0.85rem',
            color: '#9ca3af'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ef4444', display: 'inline-block' }}></span>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#f59e0b', display: 'inline-block' }}></span>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#10b981', display: 'inline-block' }}></span>
              <span style={{ marginLeft: '8px', fontWeight: 600, color: '#e5e7eb' }}>
                BUBBLES • Campaña Publicitaria 2026
              </span>
            </div>

            <a
              href={youtubeWatchUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: '#f59e0b',
                fontWeight: 600,
                fontSize: '0.825rem',
                textDecoration: 'none'
              }}
            >
              <span>Ver en YouTube</span>
              <ExternalLink size={14} />
            </a>
          </div>

          {/* Responsive 16:9 Video Player */}
          <div style={{
            position: 'relative',
            width: '100%',
            paddingTop: '56.25%', // 16:9 Aspect Ratio
            borderRadius: '16px',
            overflow: 'hidden',
            backgroundColor: '#000000',
            boxShadow: 'inset 0 0 20px rgba(0,0,0,0.8)'
          }}>
            <iframe
              src={embedUrl}
              title="Comercial Publicitario BUBBLES - Revienta la Rutina"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 'none',
                borderRadius: '16px'
              }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          {/* Highlights Below Video */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '16px',
            marginTop: '20px',
            paddingTop: '16px',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                background: 'rgba(234, 88, 12, 0.15)',
                color: '#ea580c',
                padding: '8px',
                borderRadius: '10px'
              }}>
                <Flame size={18} />
              </div>
              <div>
                <h4 style={{ fontSize: '0.9rem', color: '#ffffff', margin: 0 }}>Explosión Sensorial</h4>
                <p style={{ fontSize: '0.8rem', color: '#9ca3af', margin: 0 }}>Perlas que estallan liberando proteína</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                background: 'rgba(245, 158, 11, 0.15)',
                color: '#f59e0b',
                padding: '8px',
                borderRadius: '10px'
              }}>
                <Sparkles size={18} />
              </div>
              <div>
                <h4 style={{ fontSize: '0.9rem', color: '#ffffff', margin: 0 }}>Cero Batidores</h4>
                <p style={{ fontSize: '0.8rem', color: '#9ca3af', margin: 0 }}>Listas para añadir a tu bebida favorita</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                background: 'rgba(16, 185, 129, 0.15)',
                color: '#10b981',
                padding: '8px',
                borderRadius: '10px'
              }}>
                <ShieldCheck size={18} />
              </div>
              <div>
                <h4 style={{ fontSize: '0.9rem', color: '#ffffff', margin: 0 }}>Orgullo UAA</h4>
                <p style={{ fontSize: '0.8rem', color: '#9ca3af', margin: 0 }}>Innovación en nutrición deportiva</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
