import React, { useState } from 'react';
import { Coffee, CupSoda, Droplet, Flame, Sparkles, Check, ArrowRight } from 'lucide-react';

export default function HowToUse() {
  const [activeDrink, setActiveDrink] = useState(0);

  const drinkIdeas = [
    {
      title: 'Café Frío / Cold Brew Mocha',
      category: 'Energía Matutina & Pre-Workout',
      icon: <Coffee size={24} color="#c69466" />,
      description: 'Agrega 3 cucharadas de BUBBLES Chocolate a tu café frío con hielo o leche vegetal. Obtienes un Mocha Frappé gourmet cargado con 20g de proteína sin añadir jarabes azucarados.',
      temperature: 'Fría o con hielo (4°C - 10°C)',
      recommendedBoba: '3 cucharadas (45g)',
      tip: 'La cafeína y los aminoácidos del suero potencian tu concentración y rendimiento.'
    },
    {
      title: 'Té Chai o Té Negro con Leche',
      category: 'Experiencia Bubble Tea Tradicional',
      icon: <CupSoda size={24} color="#f59e0b" />,
      description: 'Prepara tu infusión de té chai o té negro favorita con leche deslactosada o de avena. Al añadir BUBBLES Chocolate tienes un Boba Tea saludable de nivel barista.',
      temperature: 'Fría o tibia hasta 60°C',
      recommendedBoba: '3 a 4 cucharadas',
      tip: 'Usa un popote ancho de 12mm para absorber las perlas fácilmente.'
    },
    {
      title: 'Batido Proteico de Avena y Plátano',
      category: 'Desayuno o Recuperación Post-Gym',
      icon: <Sparkles size={24} color="#ea580c" />,
      description: 'Licúa leche, plátano, avena y canela. Sirve en tu vaso e incorpora las perlas de chocolate al final (sin licuarlas). ¡Una explosión de textura que rompe la monotonía del licuado!',
      temperature: 'Fría / Smoothie espeso',
      recommendedBoba: '2 a 3 cucharadas',
      tip: 'Revuelve suavemente con cuchara para distribuir las perlas uniformemente.'
    },
    {
      title: 'Agua Fría o Agua de Coco Pura',
      category: 'Ultra Ligero & Cero Calorías Extra',
      icon: <Droplet size={24} color="#60a5fa" />,
      description: '¿No quieres calorías adicionales de leche? Agrega BUBBLES directo a un vaso de agua mineral bien fría o agua de coco hidratante. Las perlas sueltan su sabor únicamente al reventar en tu boca.',
      temperature: 'Muy fría (2°C - 6°C)',
      recommendedBoba: '3 cucharadas',
      tip: 'Refrescante, saciante y perfecta para días calurosos de Aguascalientes.'
    }
  ];

  const steps = [
    {
      num: '01',
      title: 'Sirve tu Base',
      desc: 'Llena tu vaso favorito con café, té, leche o agua fría. Si prefieres bebida caliente, cuida que no supere 60°C.'
    },
    {
      num: '02',
      title: 'Agrega BUBBLES',
      desc: 'Con una cuchara limpia y seca, añade 2 a 3 cucharadas soperas de perlas de proteína (aprox. 45g).'
    },
    {
      num: '03',
      title: 'Toma y Sube',
      desc: 'Usa un popote ancho de boba o toma directamente con una cuchara mientras bebes.'
    },
    {
      num: '04',
      title: '¡Muerde y Revienta!',
      desc: 'Presiona la perla contra el paladar o con tus dientes para detonar el chocolate y absorber la proteína.'
    }
  ];

  return (
    <section id="modo-uso" className="section-padding" style={{ backgroundColor: '#1a1a1a' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 56px' }}>
          <div className="badge-tag" style={{ marginBottom: '12px' }}>
            Fácil, Rápido y Versátil
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: '#ffffff', marginBottom: '16px' }}>
            Modo de Uso & Combinaciones Favoritas
          </h2>
          <p style={{ color: '#9ca3af', fontSize: '1rem', lineHeight: 1.6 }}>
            Compatible con bebidas frías o calientes. Transforma cualquier momento ordinario en un ritual delicioso sin perder un solo gramo de tus metas nutricionales.
          </p>
        </div>

        {/* 4 Steps Timeline */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
          gap: '20px',
          marginBottom: '64px'
        }}>
          {steps.map((st) => (
            <div
              key={st.num}
              style={{
                background: '#262626',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '18px',
                padding: '24px',
                position: 'relative'
              }}
            >
              <div style={{
                fontSize: '2.5rem',
                fontWeight: 900,
                color: 'rgba(198, 148, 102, 0.35)',
                fontFamily: 'var(--font-heading)',
                lineHeight: 1,
                marginBottom: '12px'
              }}>
                {st.num}
              </div>
              <h3 style={{ fontSize: '1.2rem', color: '#ffffff', marginBottom: '8px' }}>
                {st.title}
              </h3>
              <p style={{ color: '#9ca3af', fontSize: '0.875rem', lineHeight: 1.5 }}>
                {st.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Beverage Ideas Interactive Showcase */}
        <div style={{
          background: 'linear-gradient(145deg, #282828 0%, #1e1e1e 100%)',
          borderRadius: '24px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          padding: '36px',
        }}>
          <div style={{ marginBottom: '28px' }}>
            <h3 style={{ fontSize: '1.6rem', color: '#ffffff', marginBottom: '8px' }}>
              Ideas de Bebidas Recomendadas por Nuestra Comunidad
            </h3>
            <p style={{ color: '#9ca3af', fontSize: '0.925rem' }}>
              Selecciona una bebida para descubrir la mejor manera de maridar tus perlas BUBBLES:
            </p>
          </div>

          {/* Drink Selection Tabs */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '12px',
            marginBottom: '32px'
          }}>
            {drinkIdeas.map((drink, idx) => (
              <button
                key={drink.title}
                onClick={() => setActiveDrink(idx)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '14px 18px',
                  borderRadius: '14px',
                  background: activeDrink === idx ? '#373737' : 'rgba(255, 255, 255, 0.04)',
                  border: activeDrink === idx ? '2px solid #f59e0b' : '1px solid rgba(255, 255, 255, 0.08)',
                  color: '#ffffff',
                  textAlign: 'left'
                }}
              >
                <div style={{ flexShrink: 0 }}>{drink.icon}</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem', color: activeDrink === idx ? '#f59e0b' : '#ffffff' }}>
                    {drink.title}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#9ca3af' }}>{drink.category}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Active Drink Details Card */}
          <div style={{
            background: 'rgba(0, 0, 0, 0.35)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            borderRadius: '18px',
            padding: '28px',
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '24px'
          }} className="drink-detail-grid">
            <div>
              <div style={{ color: '#f59e0b', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '6px' }}>
                {drinkIdeas[activeDrink].category}
              </div>
              <h4 style={{ fontSize: '1.5rem', color: '#ffffff', marginBottom: '14px' }}>
                {drinkIdeas[activeDrink].title}
              </h4>
              <p style={{ color: '#d1d5db', fontSize: '1rem', lineHeight: 1.6, marginBottom: '20px' }}>
                {drinkIdeas[activeDrink].description}
              </p>
              
              <div style={{
                background: 'rgba(245, 158, 11, 0.1)',
                borderLeft: '4px solid #f59e0b',
                padding: '12px 16px',
                borderRadius: '0 8px 8px 0',
                color: '#fef3c7',
                fontSize: '0.875rem'
              }}>
                <strong>Consejo Pro:</strong> {drinkIdeas[activeDrink].tip}
              </div>
            </div>

            <div style={{
              background: '#242424',
              borderRadius: '14px',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: '14px',
              border: '1px solid rgba(255, 255, 255, 0.08)'
            }}>
              <div>
                <div style={{ fontSize: '0.8rem', color: '#9ca3af' }}>Temperatura Óptima</div>
                <div style={{ fontWeight: 700, color: '#ffffff', fontSize: '1rem' }}>
                  {drinkIdeas[activeDrink].temperature}
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.8rem', color: '#9ca3af' }}>Porción Recomendada</div>
                <div style={{ fontWeight: 700, color: '#10b981', fontSize: '1rem' }}>
                  {drinkIdeas[activeDrink].recommendedBoba} (20g Proteína)
                </div>
              </div>

              <a href="#tienda" className="btn-primary btn-sm" style={{ justifyContent: 'center', marginTop: '6px' }}>
                Pedir BUBBLES para Preparar
              </a>
            </div>
          </div>

        </div>

      </div>

      <style>{`
        @media (min-width: 800px) {
          .drink-detail-grid {
            grid-template-columns: 1.3fr 0.7fr !important;
          }
        }
      `}</style>
    </section>
  );
}
