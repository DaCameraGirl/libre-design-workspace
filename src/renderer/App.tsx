import React, { useState } from 'react';

interface Project {
  id: string;
  name: string;
  description: string;
  created: string;
  lastModified: string;
  components: Component[];
  simulations: Simulation[];
}

interface Component {
  id: string;
  name: string;
  type: string;
  value: string;
  footprint: string;
}

interface Simulation {
  id: string;
  name: string;
  date: string;
  results: string;
}

function App() {
  const [projects, setProjects] = useState<Project[]>([
    {
      id: '1',
      name: 'LED Blinker Circuit',
      description: 'Simple 555 timer LED flasher for beginners',
      created: '2024-01-15',
      lastModified: '2024-01-20',
      components: [
        { id: 'c1', name: 'NE555', type: 'IC', value: 'Timer', footprint: 'DIP-8' },
        { id: 'c2', name: 'LED1', type: 'LED', value: 'Red 5mm', footprint: 'LED-5MM' },
        { id: 'c3', name: 'R1', type: 'Resistor', value: '1kΩ', footprint: 'R_0805' }
      ],
      simulations: []
    }
  ]);
  
  const [selectedProject, setSelectedProject] = useState<Project | null>(projects[0]);

  return (
    <div style={{ 
      display: 'flex', 
      height: '100vh', 
      backgroundColor: '#1a1a1a',
      color: '#e0e0e0',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      {/* Sidebar */}
      <div style={{ 
        width: '280px', 
        backgroundColor: '#252525', 
        borderRight: '1px solid #333',
        padding: '20px',
        overflowY: 'auto'
      }}>
        <h2 style={{ margin: '0 0 20px 0', fontSize: '18px', color: '#fff' }}>
          🔬 Circuit Notebook
        </h2>
        
        <button style={{
          width: '100%',
          padding: '10px',
          backgroundColor: '#0066cc',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          marginBottom: '20px',
          fontSize: '14px'
        }}>
          + New Project
        </button>

        <div style={{ fontSize: '12px', color: '#888', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          Projects
        </div>
        
        {projects.map(project => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            style={{
              padding: '12px',
              marginBottom: '8px',
              backgroundColor: selectedProject?.id === project.id ? '#333' : 'transparent',
              borderRadius: '6px',
              cursor: 'pointer',
              borderLeft: selectedProject?.id === project.id ? '3px solid #0066cc' : '3px solid transparent'
            }}
          >
            <div style={{ fontWeight: 500, marginBottom: '4px' }}>{project.name}</div>
            <div style={{ fontSize: '12px', color: '#888' }}>
              {project.components.length} components
            </div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: '30px', overflowY: 'auto' }}>
        {selectedProject ? (
          <>
            <div style={{ marginBottom: '30px' }}>
              <h1 style={{ margin: '0 0 10px 0', fontSize: '28px' }}>
                {selectedProject.name}
              </h1>
              <p style={{ color: '#aaa', margin: '0 0 20px 0' }}>
                {selectedProject.description}
              </p>
              <div style={{ display: 'flex', gap: '20px', fontSize: '13px', color: '#666' }}>
                <span>Created: {selectedProject.created}</span>
                <span>Modified: {selectedProject.lastModified}</span>
              </div>
            </div>

            {/* Components Table */}
            <div style={{ 
              backgroundColor: '#252525', 
              borderRadius: '8px',
              padding: '20px',
              marginBottom: '20px'
            }}>
              <h3 style={{ margin: '0 0 15px 0', fontSize: '16px' }}>
                Components / BOM
              </h3>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid #444' }}>
                    <th style={{ textAlign: 'left', padding: '10px 0', fontSize: '12px', color: '#888', fontWeight: 500 }}>REF</th>
                    <th style={{ textAlign: 'left', padding: '10px 0', fontSize: '12px', color: '#888', fontWeight: 500 }}>NAME</th>
                    <th style={{ textAlign: 'left', padding: '10px 0', fontSize: '12px', color: '#888', fontWeight: 500 }}>VALUE</th>
                    <th style={{ textAlign: 'left', padding: '10px 0', fontSize: '12px', color: '#888', fontWeight: 500 }}>FOOTPRINT</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedProject.components.map(comp => (
                    <tr key={comp.id} style={{ borderBottom: '1px solid #333' }}>
                      <td style={{ padding: '12px 0', fontFamily: 'monospace', fontSize: '13px' }}>{comp.id.toUpperCase()}</td>
                      <td style={{ padding: '12px 0' }}>{comp.name}</td>
                      <td style={{ padding: '12px 0', color: '#aaa' }}>{comp.value}</td>
                      <td style={{ padding: '12px 0', color: '#888', fontSize: '12px' }}>{comp.footprint}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Quick Actions */}
            <div style={{ display: 'flex', gap: '10px' }}>
              <button style={{
                padding: '10px 16px',
                backgroundColor: '#333',
                color: '#fff',
                border: '1px solid #444',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '13px'
              }}>
                📄 Open in KiCAD
              </button>
              <button style={{
                padding: '10px 16px',
                backgroundColor: '#333',
                color: '#fff',
                border: '1px solid #444',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '13px'
              }}>
                ⚡ Run Simulation
              </button>
              <button style={{
                padding: '10px 16px',
                backgroundColor: '#333',
                color: '#fff',
                border: '1px solid #444',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '13px'
              }}>
                📊 Export BOM
              </button>
            </div>
          </>
        ) : (
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            height: '100%',
            color: '#666'
          }}>
            Select a project to get started
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
