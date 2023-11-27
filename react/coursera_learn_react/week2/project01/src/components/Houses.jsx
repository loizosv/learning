import House from "./House";

export default function Houses() {
  return (
    <div className="card-deck">
      <House
        guestFav="true"
        personImg="src/assets/home1.webp"
        startRate="3.9"
        number="5"
        country="Dubai, UAE"
        desc="7 kilometers away"
        price="240"
      />
      <House
        guestFav="true"
        personImg="src/assets/home2.webp"
        startRate="4.2"
        number="8"
        country="Bali, Indonesia"
        desc="Private Beach Villa"
        price="350"
      />
      <House
        guestFav="false"
        personImg="src/assets/home3.webp"
        startRate="3.7"
        number="3"
        country="Cabo San Lucas, Mexico"
        desc="Oceanfront Luxury Retreat"
        price="420"
      />
      <House
        guestFav="false"
        personImg="src/assets/home4.webp"
        startRate="4.5"
        number="6"
        country="Amsterdam, Netherlands"
        desc="Canal-side Houseboat"
        price="300"
      />
      <House
        guestFav="true"
        personImg="src/assets/home5.webp"
        startRate="3.4"
        number="4"
        country="Santorini, Greece"
        desc="Traditional Cave House"
        price="280"
      />
      <House
        guestFav="false"
        personImg="src/assets/home6.webp"
        startRate="4.1"
        number="7"
        country="Banff, Canada"
        desc="Mountain View Chalet"
        price="380"
      />
      <House
        guestFav="true"
        personImg="src/assets/home7.webp"
        startRate="3.8"
        number="5"
        country="Kyoto, Japan"
        desc="Historical Machiya"
        price="320"
      />
      <House
        guestFav="false"
        personImg="src/assets/home8.webp"
        startRate="4.0"
        number="9"
        country="Barcelona, Spain"
        desc="Gaudi-inspired Architecture"
        price="400"
      />
      <House
        guestFav="true"
        personImg="src/assets/home9.webp"
        startRate="3.2"
        number="2"
        country="Maui, Hawaii"
        desc="Beachfront Paradise"
        price="500"
      />
      <House
        guestFav="false"
        personImg="src/assets/home10.webp"
        startRate="4.3"
        number="8"
        country="Swiss Alps"
        desc="Alpine Chalet Retreat"
        price="450"
      />
      <House
        guestFav="true"
        personImg="src/assets/home11.webp"
        startRate="3.6"
        number="4"
        country="Edinburgh, Scotland"
        desc="Castle View Apartment"
        price="370"
      />
      <House
        guestFav="true"
        personImg="src/assets/home12.webp"
        startRate="4.6"
        number="2"
        country="Protaras, Cyprus"
        desc="Beach Front Villa"
        price="470"
      />
    </div>
  );
}
