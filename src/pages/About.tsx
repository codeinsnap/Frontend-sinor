// AboutPage.tsx
import React from "react";
import { Container, Typography, Grid } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const sliderImage1 = require("../assests/icons/img1.jpg");
const sliderImage2 = require("../assests/icons/img2.jpg");
const sliderImage3 = require("../assests/icons/img3.jpg");

const images = [
  sliderImage1,
  sliderImage2,
  sliderImage3,
  // Add more image URLs
];

const AboutPage: React.FC = () => {
  return (
    <div>
      {/* Section 1: Gallery */}
      <section className="mt-20">
        <Typography fontSize={30} className="my-5 font-bold">
          Gallery
        </Typography>
        <Container className="w-full">
          <SliderComponent />
        </Container>
      </section>

      {/* Section 2: Lifestyle Options */}
      <section className="bg-gray-300 py-8 px-8 rounded-lg my-14">
        <Typography fontSize={30} className="my-5 font-bold">
          Lifestyle options
        </Typography>
        <Container>
          <Typography variant="h4" gutterBottom>
            Independent Living
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <div>
                <Typography variant="h6" gutterBottom>
                  Includes
                </Typography>
                <ul>
                  <li>Designated dining area</li>
                  <li>Meals (1x/day)</li>
                  <li>Daily tidy (Extra fee)</li>
                  <li>Housekeeping (1x/week)</li>
                  <li>Medication administration (Extra fee)</li>
                </ul>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div>
                <Typography variant="h6" gutterBottom>
                  Assistance with
                </Typography>
                <ul>
                  <li>Bathing (Extra fee)</li>
                </ul>
              </div>
            </Grid>
          </Grid>

          <Typography variant="h4" gutterBottom>
            Long Term Care
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <div>
                <Typography variant="h6" gutterBottom>
                  Includes
                </Typography>
                <ul>
                  <li>Designated dining area</li>
                  <li>Designated floor</li>
                  <li>Meals (3x/day)</li>
                  <li>Daily tidy</li>
                  <li>Housekeeping (7x/week)</li>
                  <li>Incontinence care</li>
                  <li>Medication administration</li>
                  <li>Resident Reminders</li>
                </ul>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div>
                <Typography variant="h6" gutterBottom>
                  Assistance with
                </Typography>
                <ul>
                  <li>Bathing (2x/week)</li>
                  <li>Dressing</li>
                  <li>Feeding</li>
                  <li>Transfers</li>
                </ul>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>

      <section className="bg-gray-300 py-8 px-8 rounded-lg my-14">
        <h2>Residence Amenities & Services</h2>
        <div className="flex">
          <div className="w-1/2 pr-4">
            <ul>
              <li>Arts and crafts</li>
              <li>Baby center</li>
              <li>Billiards</li>
              <li>Chapel</li>
              <li>Community Garden</li>
              <li>Computers</li>
              <li>Day care for children</li>
              <li>Emergency call system (pendant)</li>
              <li>Emergency call system</li>
              <li>Fitness Studio</li>
              <li>Games Room</li>
              <li>Gift Shop</li>
              <li>Hairdresser</li>
              <li>Hobby kitchen</li>
              <li>Internet</li>
              <li>Laundry machines</li>
              <li>Library</li>
              <li>Mail delivery to suite</li>
            </ul>
          </div>
          <div className="w-1/2 pl-4">
            <ul>
              <li>Newspapers delivered to concierge</li>
              <li>On-site General Store</li>
              <li>Onsite foot care</li>
              <li>Parking (indoor)</li>
              <li>Parking (outdoor)</li>
              <li>Party room</li>
              <li>Patio/Courtyard/BBQ</li>
              <li>Pet friendly</li>
              <li>Pond/Lake</li>
              <li>Putting Green</li>
              <li>Religious Services & Holiday</li>
              <li>Spa tub or shower room</li>
              <li>Spa/Beauty Salon</li>
              <li>Storage lockers</li>
              <li>Walking Path</li>
              <li>Wellness Center</li>
              <li>Wheelchair (electric)</li>
              <li>Wheelchair (scooter)</li>
              <li>Wheelchair Accessible</li>
            </ul>
          </div>
        </div>

        <h2>Programs & Activities</h2>
        <div className="flex">
          <div className="w-1/2 pr-4">
            <ul>
              <li>Arts and Crafts</li>
              <li>Assisted Walks/Trails</li>
              <li>Bible Classes</li>
              <li>Billiards/Pool Tables</li>
              <li>Bingo</li>
              <li>Brain Fitness</li>
              <li>Card Games</li>
              <li>Day Trips</li>
              <li>Entertainment</li>
              <li>Excursions</li>
              <li>Exercise Program</li>
            </ul>
          </div>
          <div className="w-1/2 pl-4">
            <ul>
              <li>Gardening</li>
              <li>Movie Nights</li>
              <li>Parties</li>
              <li>Religious & Holiday Services</li>
              <li>Resident social / activity club</li>
              <li>Sewing</li>
              <li>Shuffleboard</li>
              <li>Volunteering</li>
              <li>Weekly Shopping Trips & Excursions</li>
              <li>Woodshop</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-gray-300 py-8 px-8 rounded-lg my-14">
        <h2>Staff & Care</h2>

        <h3>Staff</h3>
        <p>Medical and other support staff</p>
        <ul>
          <li>Registered Nurses: 24 hrs/day</li>
          <li>Registered Practical Nurses: 24 hrs/day</li>
          <li>Personal Support Workers: 24 hrs/day</li>
          <li>Doctor visiting: 2x/week</li>
          <li>Massage Therapist visiting: 2x/month</li>
          <li>Foot care specialist visiting: 2x/month</li>
          <li>Dentist visiting: 1x/month</li>
          <li>Physiotherapist visiting: 2x/week</li>
          <li>Chiropodist visiting</li>
        </ul>
      </section>

      <section className="bg-gray-300 py-8 px-8 rounded-lg my-14">
        <h2>Move-in Requirements</h2>
        <ul>
          <li>Chest x-ray</li>
          <li>Medical form completed by family doctor</li>
          <li>Personal Interview</li>
          <li>TB test required</li>
        </ul>
        <h2>Care Services</h2>
        <h4>Care Options Available</h4>
        <ul>
          <li>Respite care available (cost from $130)</li>
          <li>Private home-care allowed</li>
          <li>Palliative care available</li>
        </ul>

        <h3>Health Services</h3>
        <ul>
          <li>Catheter care (with special assistance)</li>
          <li>Cognitively impaired residents (with special assistance)</li>
          <li>
            Medication charted by electronic pen (with special assistance)
          </li>
          <li>Medication charted by exception (with special assistance)</li>
          <li>Ostomy care (with government assisted)</li>
          <li>Oxygen assistance (with special assistance)</li>
          <li>Physically challenged residents (with special assistance)</li>
          <li>Vitals monitoring (with special assistance)</li>
        </ul>
      </section>
    </div>
  );
};

export default AboutPage;

// SliderComponent.jsx

const SliderComponent = () => {
  return (
    <Swiper
      style={{ width: "100%", borderRadius: "30px" }}
      spaceBetween={30}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}
      loop
    >
      {images.map((imageUrl, index) => (
        <SwiperSlide key={index}>
          <img
            src={imageUrl}
            alt={`Slider ${index + 1}`}
            className="w-full"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
