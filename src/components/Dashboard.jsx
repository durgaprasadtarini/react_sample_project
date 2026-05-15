import React, { useState } from 'react';
import './Dashboard.css';
import { 
  Home, Lightbulb, Video, Router, Refrigerator, Fan,
  Search, Plus, Cctv, Store, Warehouse, Umbrella, Lamp, ChevronDown,
  LayoutGrid, Lock, Settings
} from 'lucide-react';
import avatarImg from '../assets/user_avatar.png';

export default function Dashboard() {
  const [activeNav, setActiveNav] = useState('house');
  const [activeDevice, setActiveDevice] = useState('entrance');
  const [solarPanels, setSolarPanels] = useState(true);
  const [powerReserve, setPowerReserve] = useState(false);
  const [autoReg, setAutoReg] = useState(true);
  const [expandedStay, setExpandedStay] = useState(null);
  const [openDropdowns, setOpenDropdowns] = useState({});

  const devices = [
    { id: 'entrance', icon: <Cctv size={32} />, name: 'Entrance camera', status: 'Active' },
    { id: 'stairs', icon: <Cctv size={32} />, name: 'Stairs camera', status: 'Deactivated at 22:47' },
    { id: 'canopies', icon: <Store size={32} />, name: 'Canopies', status: 'Deactivated at 21:00' },
    { id: 'garage', icon: <Warehouse size={32} />, name: 'Garage door', status: 'Deactivated at 23:51' },
    { id: 'parasols', icon: <Umbrella size={32} />, name: 'Parasols', status: 'Deactivated at 21:00' },
    { id: 'garden', icon: <Lamp size={32} />, name: 'Garden lights', status: 'Active' },
  ];

  const staysData = {
    'Kitchen': ['Lights', 'AC'],
    'Living room': ['Lights', 'Blinds'],
    'Bedrooms': ['Light', 'Heater'],
    'Bath': ['Heater', 'Vent'],
    'Garden': ['Sprinklers', 'Lights'],
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">
          <span style={{ color: '#2cf5f7' }}>GS</span>
        </div>
        <div className="sidebar-icons">
          <div className="sidebar-icon active"><LayoutGrid size={24} /></div>
          <div className="sidebar-icon"><Lock size={24} /></div>
          <div className="sidebar-icon"><Settings size={24} /></div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="top-bar">
          <div className="search-container">
            <Search size={18} color="var(--text-muted)" />
            <input type="text" placeholder="Search..." className="search-input" />
          </div>
          <div className="user-profile">
            <img src={avatarImg} alt="User Avatar" className="avatar" />
          </div>
        </header>

        <div className="dashboard-content">
          <div className="left-column">
            <div className="page-header">
              <h1 className="page-title">Domotic assistant</h1>
              <button className="btn-add">
                <Plus size={16} /> Add Device
              </button>
            </div>

            <div className="devices-section-wrapper">
              {/* Devices Menu */}
              <div className="devices-menu">
                <div className="nav-label" style={{paddingLeft: '24px'}}>DEVICES</div>
                <div className={`nav-item ${activeNav === 'house' ? 'active' : ''}`} onClick={() => setActiveNav('house')}>
                  <Home className="nav-icon" />
                  <span>House exterior</span>
                </div>
                <div className={`nav-item ${activeNav === 'lights' ? 'active' : ''}`} onClick={() => setActiveNav('lights')}>
                  <Lightbulb className="nav-icon" />
                  <span>Lights</span>
                </div>
                <div className={`nav-item ${activeNav === 'cams' ? 'active' : ''}`} onClick={() => setActiveNav('cams')}>
                  <Video className="nav-icon" />
                  <span>Cams</span>
                </div>
                <div className={`nav-item ${activeNav === 'router' ? 'active' : ''}`} onClick={() => setActiveNav('router')}>
                  <Router className="nav-icon" />
                  <span>Router</span>
                </div>
                <div className={`nav-item ${activeNav === 'appliances' ? 'active' : ''}`} onClick={() => setActiveNav('appliances')}>
                  <Refrigerator className="nav-icon" />
                  <span>Home appliances</span>
                </div>
                <div className={`nav-item ${activeNav === 'ac' ? 'active' : ''}`} onClick={() => setActiveNav('ac')}>
                  <Fan className="nav-icon" />
                  <span>Air conditioning</span>
                </div>
              </div>

              <div className="devices-container">
                <div className="section-title">HOUSE EXTERIOR DEVICES</div>
                <div className="device-grid">
                  {devices.map(device => (
                    <div 
                      key={device.id} 
                      className={`device-card ${activeDevice === device.id ? 'active' : ''}`}
                      onClick={() => setActiveDevice(device.id)}
                    >
                      <div className="device-icon">{device.icon}</div>
                      <div className="device-info">
                        <div className="device-name">{device.name}</div>
                        <div className="device-status">{device.status}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="right-column">
            <div className="panel-section-title">General commands</div>
            
            <div>
              <div className="panel-label1">THERMOSTAT</div>
              <div className="thermostat-container">
                <div className="temperature-display">
                  <div className="temp-current">25 °C</div>
                  <div className="temp-target">19 °C</div>
                </div>
                <div className="thermostat-controls">
                  <div className="temp-buttons">
                    <button className="btn-temp">+</button>
                    <button className="btn-temp">-</button>
                  </div>
                  <div className="auto-reg">
                    <div className={`toggle-switch ${autoReg ? 'active' : ''}`} onClick={() => setAutoReg(!autoReg)}>
                      <div className="toggle-knob"></div>
                    </div>
                    <span>Automatic<br/>regulation</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="energy-header">
                <div className="panel-label" style={{margin: 0}}>ENERGY</div>
                <div className="energy-consumption">CURRENT CONSUMPTION - 12.4 kWh</div>
              </div>
              <div className="energy-item">
                <span>Solar panels</span>
                <div className={`toggle-switch ${solarPanels ? 'active' : ''}`} onClick={() => setSolarPanels(!solarPanels)}>
                  <div className="toggle-knob"></div>
                </div>
              </div>
              <div className="energy-item">
                <span>Power reserve</span>
                <div className={`toggle-switch ${powerReserve ? 'active' : ''}`} onClick={() => setPowerReserve(!powerReserve)}>
                  <div className="toggle-knob"></div>
                </div>
              </div>
            </div>

            <div>
              <div className="panel-label">STAYS</div>
                <div className="stays-list">
                  {Object.keys(staysData).map((room) => (
                    <div key={room} className="stay-block">
                      <div
                        className={`stay-item ${expandedStay === room ? 'expanded' : ''}`}
                        onClick={() => setExpandedStay(prev => prev === room ? null : room)}
                      >
                        <span>{room}</span>
                        <ChevronDown size={16} />
                      </div>

                      {expandedStay === room && (
                        <div className="stay-sublist">
                          {staysData[room].map((sub) => {
                            const key = `${room}|${sub}`;
                            const open = !!openDropdowns[key];
                            return (
                              <div key={sub} className="stay-subitem" onClick={(e) => e.stopPropagation()}>
                                <button
                                  className="subitem-button"
                                  onClick={() => setOpenDropdowns(prev => ({ ...prev, [key]: !prev[key] }))}
                                >
                                  {sub}
                                </button>
                                {open && (
                                  <div className="sub-dropdown">
                                    <select defaultValue="">
                                      <option value="">Select action</option>
                                      <option value="on">Turn on</option>
                                      <option value="off">Turn off</option>
                                    </select>
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
