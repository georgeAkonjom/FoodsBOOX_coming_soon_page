import { useState } from "react";
import "./App.css";
import foodbox_vendor from './assets/foodbox_vendor_appeal.jpeg';

function App() {
  const [email_addr, setEmail_addr] = useState("");
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    setEmail_addr(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://foodsboox-coming-soon-page.onrender.com/api/subscribe/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email_addr })
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("Thanks! You're on the list.");
        setEmail_addr("");
      } else {
        setMessage(data.detail || "Something went wrong.");
      }
    } catch (error) {
      setMessage("Network error. Please try again.");
    }
  };

  return (
    <>
      <section id="hero">
        <div id="left">
          <img id="hero_img" src={foodbox_vendor} alt="a vendor advert." />
        </div>
        <div id="right">
          <div id="hero_text_contain">
            <span>The premier food delivery platform</span>
            <br />
            <span className="hero_text inter-black">Coming Soon</span>
          </div>
          <div id="form">
            <form onSubmit={handleSubmit}>
              <label htmlFor="email">
                <span className="bold">Just plain interested?</span> We'll keep in touch.
              </label>
              <br />
              <input
                type="email"
                id="email"
                placeholder="Email Address"
                value={email_addr}
                onChange={handleChange}
              />
              <br />
              <div class="button_contain">
              <button type="submit" class="btn mail">Join our mailing list</button>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSd4fxHx4SpZXRK2mT2Ucwtax83QPATf-tZIKRYY0niMdFpD4g/viewform" class="btn vendor">SignUp as a Store</a>
              </div>
              <br/>
              {/* <p class="error"> */}
              {message && <p class="error"> {message} </p>} 
            {/* </p> */}
            </form>
          </div>
          <p class="desc">FoodsBOOX is proprietary software from <a href="https://www.booxcommunity.com" target="_blank" rel="noopener">BOOX Community</a> that aims to ease the transit and availabilty of food and food products. Sign up as a vendor today!</p>
        </div>

      </section>
      <div id="copy_contain">
        <p id="copy">&copy; BOOX Community Limited. <span class="bold">2025</span></p>
      </div>

    </>
  );
}

export default App;

