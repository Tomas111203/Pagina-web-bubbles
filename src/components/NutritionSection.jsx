import React, { useState } from 'react';
import { AlertTriangle, ThermometerSnowflake, ShieldCheck, Heart, Info, Check, BarChart3 } from 'lucide-react';

export default function NutritionSection() {
  const [portionMode, setPortionMode] = useState('portion'); // 'portion' or '100g'

  const nutritionData = {
    portion: {
      label: 'Por Porción (45 g aprox. 3 cucharadas)',
      energyKcal: '118 kcal (495 kJ)',
      protein: '20.0 g',
      proteinDaily: '40%',
      totalFat: '1.2 g',
      saturatedFat: '0.4 g',
      transFat: '0 mg',
      carbs: '3.8 g',
      sugars: '1.1 g',
      addedSugars: '0 g',
      fiber: '1.4 g',
      sodium: '42 mg',
      calcium: '180 mg (18% VDR)',
      bcaa: '4.6 g',
    },
    '100g': {
      label: 'Por 100 gramos de producto',
      energyKcal: '262 kcal (1,100 kJ)',
      protein: '44.4 g',
      proteinDaily: '89%',
      totalFat: '2.7 g',
      saturatedFat: '0.9 g',
      transFat: '0 mg',
      carbs: '8.4 g',
      sugars: '2.4 g',
      addedSugars: '0 g',
      fiber: '3.1 g',
      sodium: '93 mg',
      calcium: '400 mg (40% VDR)',
      bcaa: '10.2 g',
    }
  };

  const current = nutritionData[portionMode];

  return (
    <section id="nutricion" className="section-padding" style={{ backgroundColor: '#222222' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 56px' }}>
          <div className="badge-tag" style={{ marginBottom: '12px' }}>
            <BarChart3 size={14} /> Transparencia Total & Formulación
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: '#ffffff', marginBottom: '16px' }}>
            Información Nutrimental & Alérgenos
          </h2>
          <p style={{ color: '#9ca3af', fontSize: '1rem', lineHeight: 1.6 }}>
            Elaborado bajo los más estrictos estándares de calidad e inocuidad alimentaria. Diseñado específicamente para atletas, estudiantes y entusiastas del fitness.
          </p>
        </div>

        {/* Survey Stat Spotlight Banner */}
        <div style={{
          background: 'linear-gradient(90deg, rgba(84, 49, 28, 0.4) 0%, rgba(55, 55, 55, 0.6) 100%)',
          border: '1px solid rgba(245, 158, 11, 0.35)',
          borderRadius: '16px',
          padding: '24px 32px',
          marginBottom: '50px',
          display: 'flex',
          alignItems: 'center',
          gap: '24px',
          flexWrap: 'wrap'
        }}>
          <div style={{
            background: 'linear-gradient(135deg, #f59e0b 0%, #ea580c 100%)',
            color: '#ffffff',
            padding: '16px 22px',
            borderRadius: '14px',
            fontWeight: 900,
            fontSize: '2rem',
            fontFamily: 'var(--font-heading)',
            textAlign: 'center',
            minWidth: '110px'
          }}>
            53%
          </div>
          <div style={{ flex: 1 }}>
            <h4 style={{ color: '#ffffff', fontSize: '1.2rem', marginBottom: '6px' }}>
              El Atributo Más Valorado por Nuestros Consumidores
            </h4>
            <p style={{ color: '#d1d5db', fontSize: '0.95rem', margin: 0 }}>
              En la investigación de mercado realizada en la <strong>Universidad Autónoma de Aguascalientes</strong>, el <span style={{ color: '#f59e0b', fontWeight: 700 }}>53% de los encuestados</span> indicó que la alta concentración de proteína por porción es el factor definitivo para elegir este producto. Por eso formulamos <strong>20g de proteína real</strong> en cada toma.
            </p>
          </div>
        </div>

        {/* Nutrition Table & Ingredients Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '40px'
        }} className="nutrition-grid">

          {/* Left: Interactive NOM-051 Nutritional Table */}
          <div style={{
            background: '#ffffff',
            color: '#111827',
            borderRadius: '20px',
            padding: '28px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
            fontFamily: 'var(--font-heading)'
          }}>
            <div style={{ borderBottom: '6px solid #111827', paddingBottom: '8px', marginBottom: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontSize: '1.75rem', fontWeight: 900, margin: 0, textTransform: 'uppercase' }}>
                  Declaración Nutrimental
                </h3>
                <span className="badge-seal" style={{ backgroundColor: '#111827', color: '#fff', fontSize: '0.65rem' }}>
                  NOM-051
                </span>
              </div>
              <div style={{ fontSize: '0.85rem', color: '#4b5563', fontFamily: 'var(--font-body)' }}>
                Sabor: Chocolate Belga Intenso
              </div>
            </div>

            {/* Toggle Switch */}
            <div style={{
              display: 'flex',
              background: '#f3f4f6',
              padding: '4px',
              borderRadius: '10px',
              marginBottom: '16px'
            }}>
              <button
                onClick={() => setPortionMode('portion')}
                style={{
                  flex: 1,
                  padding: '8px',
                  borderRadius: '8px',
                  border: 'none',
                  background: portionMode === 'portion' ? '#111827' : 'transparent',
                  color: portionMode === 'portion' ? '#ffffff' : '#4b5563',
                  fontWeight: 700,
                  fontSize: '0.825rem'
                }}
              >
                Por Porción (45 g)
              </button>
              <button
                onClick={() => setPortionMode('100g')}
                style={{
                  flex: 1,
                  padding: '8px',
                  borderRadius: '8px',
                  border: 'none',
                  background: portionMode === '100g' ? '#111827' : 'transparent',
                  color: portionMode === '100g' ? '#ffffff' : '#4b5563',
                  fontWeight: 700,
                  fontSize: '0.825rem'
                }}
              >
                Por 100 gramos
              </button>
            </div>

            {/* Table Rows */}
            <div style={{ fontSize: '0.9rem', borderBottom: '4px solid #111827', paddingBottom: '6px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid #e5e7eb' }}>
                <span style={{ fontWeight: 800 }}>Contenido Energético</span>
                <span style={{ fontWeight: 800 }}>{current.energyKcal}</span>
              </div>
              
              {/* Highlight Protein */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '8px 6px',
                background: '#fef3c7',
                borderLeft: '4px solid #ea580c',
                margin: '4px 0',
                borderRadius: '4px'
              }}>
                <span style={{ fontWeight: 900, color: '#9a3412', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  PROTEÍNA DE SUERO (WHEY) ⭐
                </span>
                <span style={{ fontWeight: 900, color: '#9a3412', fontSize: '1.05rem' }}>{current.protein}</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid #e5e7eb' }}>
                <span style={{ fontWeight: 600 }}>Grasas Totales</span>
                <span>{current.totalFat}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0 4px 16px', color: '#6b7280', borderBottom: '1px solid #e5e7eb' }}>
                <span>Grasa Saturada</span>
                <span>{current.saturatedFat}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0 4px 16px', color: '#6b7280', borderBottom: '1px solid #e5e7eb' }}>
                <span>Grasas Trans</span>
                <span>{current.transFat}</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid #e5e7eb' }}>
                <span style={{ fontWeight: 600 }}>Carbohidratos Disponibles</span>
                <span>{current.carbs}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0 4px 16px', color: '#6b7280', borderBottom: '1px solid #e5e7eb' }}>
                <span>Azúcares Totales</span>
                <span>{current.sugars}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0 4px 16px', color: '#6b7280', borderBottom: '1px solid #e5e7eb' }}>
                <span>Azúcares Añadidos</span>
                <span style={{ fontWeight: 700, color: '#10b981' }}>{current.addedSugars} (Cero)</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid #e5e7eb' }}>
                <span style={{ fontWeight: 600 }}>Fibra Dietética</span>
                <span>{current.fiber}</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid #e5e7eb' }}>
                <span style={{ fontWeight: 600 }}>Sodio</span>
                <span>{current.sodium}</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0' }}>
                <span style={{ fontWeight: 600 }}>BCAAs Naturales (Leucina, Isoleucina, Valina)</span>
                <span style={{ fontWeight: 700, color: '#2563eb' }}>{current.bcaa}</span>
              </div>
            </div>

            <div style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '10px', lineHeight: 1.4, fontFamily: 'var(--font-body)' }}>
              *Los porcentajes de Valores Diarios están calculados conforme a la NOM-051-SCFI/SSA1 para una dieta diaria estándar de 2,000 kcal.
            </div>
          </div>

          {/* Right: Ingredients, Allergens & Cold Chain */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* Ingredients Card */}
            <div className="card-glass">
              <h3 style={{ fontSize: '1.35rem', color: '#ffffff', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <ShieldCheck size={22} color="#10b981" />
                Ingredientes 100% de Grado Alimenticio
              </h3>
              <p style={{ color: '#d1d5db', fontSize: '0.925rem', lineHeight: 1.6, marginBottom: '14px' }}>
                Agua purificada, <strong>aislado de proteína de suero de leche (Whey Protein Isolate 90%)</strong>, cacao holandés puro desgrasado, alginato de sodio (extracto de alga marina parda para la membrana esférica), lactato de calcio, extracto puro de vainilla, glucósidos de esteviol (Stevia rebaudiana de alta pureza), sorbato de potasio (0.05% como conservador grado alimenticio).
              </p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <span style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#34d399', fontSize: '0.75rem', padding: '4px 10px', borderRadius: '9999px', fontWeight: 600 }}>
                  ✓ Sin Azúcares Añadidos
                </span>
                <span style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#34d399', fontSize: '0.75rem', padding: '4px 10px', borderRadius: '9999px', fontWeight: 600 }}>
                  ✓ Sin Gluten
                </span>
                <span style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#34d399', fontSize: '0.75rem', padding: '4px 10px', borderRadius: '9999px', fontWeight: 600 }}>
                  ✓ Proteína de Alta Biodisponibilidad
                </span>
              </div>
            </div>

            {/* Allergen Warning Box (Mandatory Requirement) */}
            <div style={{
              background: 'rgba(239, 68, 68, 0.12)',
              border: '2px solid rgba(239, 68, 68, 0.4)',
              borderRadius: '16px',
              padding: '20px',
              display: 'flex',
              gap: '16px',
              alignItems: 'flex-start'
            }}>
              <AlertTriangle size={24} color="#ef4444" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <h4 style={{ color: '#f87171', fontSize: '1.05rem', marginBottom: '6px' }}>
                  DECLARACIÓN DE ALÉRGENOS (NOM-051)
                </h4>
                <p style={{ color: '#fca5a5', fontSize: '0.9rem', lineHeight: 1.5, margin: 0 }}>
                  <strong>CONTIENE LECHE Y DERIVADOS LÁCTEOS:</strong> Este producto contiene proteína aislada de suero de leche de origen bovino. Puede contener trazas insignificantes de soya proveniente del proceso de lecitinado del cacao. Personas con alergia severa a la caseína o a la proteína de suero deben abstenerse de su consumo.
                </p>
              </div>
            </div>

            {/* Cold Chain Conservation & Expiration Box */}
            <div style={{
              background: 'rgba(59, 130, 246, 0.12)',
              border: '2px solid rgba(59, 130, 246, 0.35)',
              borderRadius: '16px',
              padding: '20px',
              display: 'flex',
              gap: '16px',
              alignItems: 'flex-start'
            }}>
              <ThermometerSnowflake size={26} color="#60a5fa" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <h4 style={{ color: '#93c5fd', fontSize: '1.05rem', marginBottom: '6px' }}>
                  Conservación en Frío y Fecha de Caducidad
                </h4>
                <ul style={{ color: '#bfdbfe', fontSize: '0.875rem', paddingLeft: '18px', lineHeight: 1.5 }}>
                  <li><strong>Temperatura recomendada:</strong> Mantener siempre en refrigeración constante entre <strong>2°C y 4°C</strong>.</li>
                  <li><strong>No congelar:</strong> Las temperaturas bajo cero dañan la membrana elástica de alginato, provocando que se reviente antes de tiempo.</li>
                  <li><strong>Vida útil:</strong> 45 días cerrado en refrigeración a partir de la fecha de elaboración indicada en el lote.</li>
                  <li><strong>Una vez abierto:</strong> Mantener con la tapa herméticamente cerrada y consumir preferentemente dentro de los 7 a 10 días.</li>
                </ul>
              </div>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        @media (min-width: 900px) {
          .nutrition-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
