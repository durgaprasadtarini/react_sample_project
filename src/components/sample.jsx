import { useState } from "react";
import "./sample.css";

function Sample() {
  const [selectedDevice, setSelectedDevice] = useState("House exterior");
  const [thermostat, setThermostat] = useState(25);
  const [autoReg, setAutoReg] = useState(true);
  const [solar, setSolar] = useState(true);
  const [reserve, setReserve] = useState(false);

  const devices = [
    "House exterior",
    "Lights",
    "Cams",
    "Router",
    "Home appliances",
    "Air conditioning",
  ];

  const cards = [
    { title: "Entrance camera", status: "Active" },
    { title: "Stairs camera", status: "Deactivated at 22:47" },
    { title: "Canopies", status: "Deactivated at 21:00" },
    { title: "Garage door", status: "Deactivated at 23:51" },
    { title: "Parasols", status: "Deactivated at 21:00" },
    { title: "Garden lights", status: "Active" },
  ];

  return (
    <div className="domotic-root">
      <div className="sidebar-left">
        <div className="brand">GS</div>
        <div className="search">
          <input placeholder="Search..." />
        </div>
        <div className="devices-list">
          <h4>Devices</h4>
          {devices.map((d) => (
            <button
              key={d}
              className={"device-item " + (selectedDevice === d ? "active" : "")}
              onClick={() => setSelectedDevice(d)}
            >
              <span className="device-icon" />
              {d}
            </button>
          ))}
        </div>
      </div>

      <div className="main-center">
        <header className="main-header">
          <h1>Domotic assistant</h1>
          <button className="add-device">+ Add Device</button>
        </header>

        <section className="center-content">
          <div className="cards-panel">
            <h5>House Exterior Devices</h5>
            <div className="cards-grid">
              {cards.map((c) => (
                <div key={c.title} className={"card " + (c.status === "Active" ? "highlight" : "") }>
                  <div className="card-icon" />
                  <div className="card-title">{c.title}</div>
                  <div className="card-sub">{c.status}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <aside className="sidebar-right">
        <div className="panel thermostat">
          <h6>Thermostat</h6>
          <div className="thermo-values">
            <div className="set-temp">{thermostat}°C</div>
            <div className="current-temp">19°C</div>
          </div>
          <div className="thermo-controls">
            <button onClick={() => setThermostat((t) => t + 1)}>+</button>
            <button onClick={() => setThermostat((t) => t - 1)}>−</button>
          </div>
          <label className="toggle-row">
            <input type="checkbox" checked={autoReg} onChange={() => setAutoReg((s) => !s)} />
            Automatic regulation
          </label>
        </div>

        <div className="panel energy">
          <h6>Energy</h6>
          <div className="energy-row">
            <label>
              <input type="checkbox" checked={solar} onChange={() => setSolar((s) => !s)} /> Solar panels
            </label>
          </div>
          <div className="energy-row">
            <label>
              <input type="checkbox" checked={reserve} onChange={() => setReserve((s) => !s)} /> Power reserve
            </label>
          </div>
        </div>

        <div className="panel stays">
          <h6>Stays</h6>
          <ul>
            <li>Kitchen</li>
            <li>Living room</li>
            <li>Bedrooms</li>
            <li>Bath</li>
            <li>Garden</li>
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default Sample;