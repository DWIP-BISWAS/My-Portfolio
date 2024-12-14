import React, { useState } from "react";
import "./style.css";

const App = () => {
  // State variables
  const [sidebarActive, setSidebarActive] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const [modalContent, setModalContent] = useState({ img: "", title: "", text: "" });
  const [selectActive, setSelectActive] = useState(false);
  const [selectedValue, setSelectedValue] = useState("All");
  const [activePage, setActivePage] = useState("Home");
  const [formValid, setFormValid] = useState(false);

  // Sidebar toggle
  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  // Modal handling
  const openModal = (img, title, text) => {
    setModalContent({ img, title, text });
    setModalActive(true);
  };

  const closeModal = () => {
    setModalActive(false);
  };

  // Select dropdown handling
  const toggleSelect = () => {
    setSelectActive(!selectActive);
  };

  const handleSelect = (value) => {
    setSelectedValue(value);
    setSelectActive(false);
    filterFunc(value.toLowerCase());
  };

  // Page navigation handling
  const navigateTo = (page) => {
    setActivePage(page);
    window.scrollTo(0, 0);
  };

  // Form validation
  const handleFormInput = (e) => {
    const form = e.target.closest("form");
    setFormValid(form.checkValidity());
  };

  // Filtering logic
  const filterFunc = (selectedValue) => {
    const filterItems = document.querySelectorAll("[data-filter-item]");
    filterItems.forEach((item) => {
      if (selectedValue === "all" || item.dataset.category === selectedValue) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  };

  return (
    <div>
      {/* Sidebar */}
      <aside className={`sidebar ${sidebarActive ? "active" : ""}`} data-sidebar>
        <button onClick={toggleSidebar} data-sidebar-btn>
          ☰
        </button>
        <nav>
          <ul>
            <li
              className={activePage === "Home" ? "active" : ""}
              onClick={() => navigateTo("Home")}
              data-nav-link
            >
              Home
            </li>
            <li
              className={activePage === "About" ? "active" : ""}
              onClick={() => navigateTo("About")}
              data-nav-link
            >
              About
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main>
        {/* Testimonials Section */}
        <section>
          <h2>Testimonials</h2>
          <div className="testimonials-container">
            <div
              className="testimonials-item"
              data-testimonials-item
              onClick={() => openModal("image.jpg", "John Doe", "Great service!")}
            >
              <img data-testimonials-avatar src="image.jpg" alt="Avatar" />
              <h3 data-testimonials-title>John Doe</h3>
              <p data-testimonials-text>Great service!</p>
            </div>
          </div>
        </section>

        {/* Modal */}
        {modalActive && (
          <div className={`modal-container ${modalActive ? "active" : ""}`} data-modal-container>
            <div className="overlay" data-overlay onClick={closeModal}></div>
            <div className="modal">
              <img src={modalContent.img} alt="Avatar" data-modal-img />
              <h3 data-modal-title>{modalContent.title}</h3>
              <p data-modal-text>{modalContent.text}</p>
              <button onClick={closeModal} data-modal-close-btn>
                Close
              </button>
            </div>
          </div>
        )}

        {/* Custom Select */}
        <section>
          <div className={`custom-select ${selectActive ? "active" : ""}`} data-select onClick={toggleSelect}>
            <span data-selecct-value>{selectedValue}</span>
          </div>
          {selectActive && (
            <div className="select-items">
              <div onClick={() => handleSelect("All")} data-select-item>
                All
              </div>
              <div onClick={() => handleSelect("Category1")} data-select-item>
                Category1
              </div>
            </div>
          )}
        </section>

        {/* Contact Form */}
        <section>
          <form data-form>
            <input
              type="text"
              placeholder="Name"
              data-form-input
              onInput={handleFormInput}
              required
            />
            <input
              type="email"
              placeholder="Email"
              data-form-input
              onInput={handleFormInput}
              required
            />
            <textarea
              placeholder="Message"
              data-form-input
              onInput={handleFormInput}
              required
            ></textarea>
            <button type="submit" data-form-btn disabled={!formValid}>
              Submit
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default App;
    
