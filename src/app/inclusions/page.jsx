import {
  FaBus,
  FaHotel,
  FaUtensils,
  FaMapMarkedAlt,
  FaPassport,
  FaHiking,
  FaMoneyBillAlt,
  FaUserShield,
  FaPlane,
  FaBriefcaseMedical,
  FaBan,
  FaUserTie,
  FaHandHoldingUsd,
} from "react-icons/fa";
import IncAndExc from "../components/inclusions/IncAndExc";

export const tourCategories = [
  {
    id: "Domestic",
    label: "Domestic Tourists",
    inclusions: [
      {
        icon: <FaBus size={36} />,
        heading: "Comfortable Transport",
        paragraph:
          "Air-conditioned vehicles for all transfers. we offer cars, parado, grand cabin, 4x4 wheels based on number of people.",
      },
      {
        icon: <FaHotel size={36} />,
        heading: "Accommodation",
        paragraph:
          "Stay in 5-star hotels or local guest houses. Our Luxury package includes 5-star and 3-star hotel, whereas our standard packages includes local guest houses.",
      },
      {
        icon: <FaUtensils size={36} />,
        heading: "Breakfast",
        paragraph:
          "The packages for our domestic tourist includes Breakfast only.",
      },
      {
        icon: <FaPlane size={36} />,
        heading: "Airfare Tickets",
        paragraph:
          "Airfare is included only for tours that are labeled 'By Air' on the main tour page. If the tour is labeled by-road and a guest opts to travel by air, additional charges will apply, if there is any.",
      },
      {
        icon: <FaUserTie size={36} />,
        heading: "Experienced Driver and Vehicle Fuel",
        paragraph:
          "Each of tour packages includes Vehicle Fuel and we also hire experienced local drivers for our tours.",
      },
    ],
    exclusions: [
      {
        icon: <FaUtensils size={36} />,
        heading: "Lunch and Other Meals",
        paragraph:
          "Meal services, including lunch, are not offered as part of domestic tour packages.",
      },
      {
        icon: <FaUserTie size={36} />,
        heading: "Local Expert Guide",
        paragraph:
          "Guiding services by a local expert are not part of the domestic tour package by default. A guide can be included at an extra cost.",
      },
      {
        icon: <FaMoneyBillAlt size={36} />,
        heading: "Personal Expenses",
        paragraph:
          "Laundry, phone calls, and other personal costs are not included.",
      },
      {
        icon: <FaUserShield size={36} />,
        heading: "Forts, National Parks & Site Tickets",
        paragraph:
          "For our domestic tourists, the ticket price of Forts, National Parks and other tourist sites are not Included.",
      },
      {
        icon: <FaUserShield size={36} />,
        heading: "Travel Insurance",
        paragraph: "Travel or health insurance is not part of the package.",
      },
      {
        icon: <FaHandHoldingUsd size={36} />,
        heading: "Tips and Gratuities",
        paragraph:
          "Tips and gratuities for guides, drivers, and support staff are not included in the tour package.",
      },
    ],
  },

  {
    id: "International",
    label: "International Tourists",
    inclusions: [
      {
        icon: <FaBus size={36} />,
        heading: "Transportation including Vehicle Fuel",
        paragraph:
          "The cost includes air-conditioned vehicle including fuel cost. Our vehicles are cars, Parado, Grand Cabin and 4x4 Jeeps .",
      },
      {
        icon: <FaHotel size={36} />,
        heading: "Hotel Bookings and Accomodations",
        paragraph:
          "The Standard Packages includes Local guest houses and hotels, whereas the Luxury package includes 4-star and 5-star hotels.",
      },
      {
        icon: <FaMoneyBillAlt size={36} />,
        heading: "Forts, National Parks and Site Tickets",
        paragraph:
          "For our International Tourist, each tour cost also includes fort tickets, national park tickets and other tourist site tickets as well.",
      },
      {
        icon: <FaUtensils size={36} />,
        heading: "Breakfast and Other Meals",
        paragraph:
          "Our international tourist will pay once and their food / meals are all covered.",
      },
      {
        icon: <FaPlane size={36} />,
        heading: "Airfare Tickets if any",
        paragraph:
          "Airfare is included only for tours that are labeled 'By Air' on the main tour page. If the tour is labeled by-road and a guest opts to travel by air, additional charges will apply, if there is any.",
      },
      {
        icon: <FaMapMarkedAlt size={36} />,
        heading: "Experienced Local Guide and Driver",
        paragraph:
          "For the tour we hire local guide and driver, who knows the area well. This service is also included..",
      },
      {
        icon: <FaPassport size={36} />,
        heading: "Visa Assistance",
        paragraph:
          "Full documentation for visa application will be provided including invitation letter and itinerary on companys letterhead.",
      },
    ],
    exclusions: [
      {
        icon: <FaUserShield size={36} />,
        heading: "International Travel Insurance",
        paragraph:
          "You are advised to arrange your own international travel insurance.",
      },
      {
        icon: <FaPlane size={36} />,
        heading: "International Airfare",
        paragraph: "The package does not include flights to and from Pakistan.",
      },
      {
        icon: <FaMoneyBillAlt size={36} />,
        heading: "Personal Expenses",
        paragraph:
          "Laundry, phone calls, and other personal costs are not included.",
      },
      {
        icon: <FaMoneyBillAlt size={36} />,
        heading: "Tips and Gratuities",
        paragraph:
          "Tips and gratuities for guides, drivers, and support staff are not included in the tour package.",
      },
    ],
  },

  {
    id: "One-Day-Tours",
    label: "One Day Tours",
    inclusions: [
      {
        icon: <FaBus size={36} />,
        heading: "Transportation including Fuel Cost",
        paragraph:
          "The transportation for one day covers fuel and vehicle rent as well.",
      },
      {
        icon: <FaBus size={36} />,
        heading: "Pickup & Drop",
        paragraph:
          "Same-day return in a luxury coach, parado or car with driver.",
      },
      {
        icon: <FaMapMarkedAlt size={36} />,
        heading: "Local Guide and Driver",
        paragraph: "Experienced guide to accompany you throughout the day.",
      },
      {
        icon: <FaUtensils size={36} />,
        heading: "Lunch Included",
        paragraph: "Enjoy a traditional meal at a selected local restaurant.",
      },
      {
        icon: <FaMoneyBillAlt size={36} />,
        heading: "Fort & Site Tickets",
        paragraph: "For a one day tour lunch or dinner is included.",
      },
    ],
    exclusions: [
      {
        icon: <FaBan size={36} />,
        heading: "Extra Activities",
        paragraph:
          "Optional boat rides or cable cars not part of standard price.",
      },
      {
        icon: <FaMoneyBillAlt size={36} />,
        heading: "Tips & Gratuities",
        paragraph: "Tips for guides or drivers are not included in the cost.",
      },
    ],
  },

  {
    id: "Trekking",
    label: "Trekking",
    inclusions: [
      {
        icon: <FaHiking size={36} />,
        heading: "Trekking Equipment",
        paragraph:
          "Sleeping bags, tents, and trekking poles included for high-altitude adventures.",
      },
      {
        icon: <FaMapMarkedAlt size={36} />,
        heading: "Experienced Guides",
        paragraph:
          "Professionals with mountain rescue and wilderness experience.",
      },
      {
        icon: <FaUtensils size={36} />,
        heading: "Camp Meals",
        paragraph: "Three meals daily prepared fresh at the campsite.",
      },
    ],
    exclusions: [
      {
        icon: <FaUserShield size={36} />,
        heading: "Rescue Insurance",
        paragraph: "Emergency helicopter or mountain evacuation not included.",
      },
      {
        icon: <FaBriefcaseMedical size={36} />,
        heading: "Medical Costs",
        paragraph: "Personal medication or hospital treatment is not covered.",
      },
      {
        icon: <FaMoneyBillAlt size={36} />,
        heading: "Porter Tips",
        paragraph: "Gratuities for porters and crew not part of the package.",
      },
    ],
  },
];

const page = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-white">
      <IncAndExc tourCategories={tourCategories} />
    </div>
  );
};

export default page;
