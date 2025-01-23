import GeneralPhysician from "../assets/GeneralPhysician.png";
import Gynecologist from "../assets/Gynecologist.png";
import Dermatologist from "../assets/Dermatologist.png";
import Pediatricians from "../assets/Pediatricians.png";
import Neurologist from "../assets/Neurologist.png";
import Gastroenterologist from "../assets/Gastroenterologist.png";

// Doctors image

import doc1 from '../assets/doc1.png'
import doc2 from '../assets/doc2.png'
import doc3 from '../assets/doc3.png'
import doc4 from '../assets/doc4.png'
import doc5 from '../assets/doc5.png'
import doc6 from '../assets/doc6.png'
import doc7 from '../assets/doc7.png'
import doc8 from '../assets/doc8.png'
import doc9 from '../assets/doc9.png'
import doc10 from '../assets/doc10.png'




export const specialityData = [
  {
    speciality: "General physician",
    image: GeneralPhysician,
  },
  {
    speciality: "Gynecologist",
    image: Gynecologist,
  },
  {
    speciality: "Dermatologist",
    image: Dermatologist,
  },
  {
    speciality: "Pediatrician",
    image: Pediatricians,
  },
  {
    speciality: "Neurologist",
    image: Neurologist,
  },
  {
    speciality: "Gastroenterologist",
    image: Gastroenterologist,
  },
];

export const doctors = [
  {
    _id: "doc1",
    name: "Dr. Usman Nazir",
    image: doc1,
    speciality: "General Physician",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Usman Nazir provides comprehensive primary healthcare, focusing on diagnosing and treating common medical conditions. With a patient-centered approach, he ensures personalized care and preventive measures for long-term wellness.",
    fees: 50,
    address: {
      line1: "New Baker Street, Sialkot",
      line2: "Circle, Ring Road, Sialkot",
    },
  },
  {
    _id: "doc2",
    name: "Dr. Sarah Ahmed",
    image: doc2,
    speciality: "Gynecologist",
    degree: "MBBS, FCPS",
    experience: "6 Years",
    about:
      "Dr. Sarah Ahmed specializes in women's reproductive health, offering expert care in prenatal, postnatal, and gynecological treatments. She is dedicated to providing compassionate support for women at every stage of life.",
    fees: 10,
    address: {
      line1: "Greenwood Avenue, Lahore",
      line2: "Main Boulevard, Lahore",
    },
  },
  {
    _id: "doc3",
    name: "Dr. Riaz Farooq",
    image: doc3,
    speciality: "Dermatologist",
    degree: "MBBS, MD",
    experience: "8 Years",
    about:
      "Dr. Riaz Farooq excels in skincare, treating a variety of skin conditions such as acne, eczema, and psoriasis. His expertise lies in advanced dermatological treatments and cosmetic procedures to enhance skin health.",
    fees: 12,
    address: {
      line1: "Blue Area, Islamabad",
      line2: "Jinnah Road, Islamabad",
    },
  },
  {
    _id: "doc4",
    name: "Dr. Faisal Khan",
    image: doc4,
    speciality: "Pediatrician",
    degree: "MBBS, DCH",
    experience: "5 Years",
    about:
      "Dr. Faisal Khan is a dedicated pediatrician providing specialized care for infants, children, and adolescents. He ensures early diagnosis, preventive care, and treatment for childhood illnesses to promote healthy growth.",
    fees: 8,
    address: {
      line1: "Main Market, Karachi",
      line2: "Defense Area, Karachi",
    },
  },
  {
    _id: "doc5",
    name: "Dr. Natasha Hyat",
    image: doc5,
    speciality: "Neurologist",
    degree: "MBBS, FCPS",
    experience: "10 Years",
    about:
      "Dr. Natasha Hyat specializes in diagnosing and managing neurological disorders, including migraines, epilepsy, and Parkinson's disease. She combines her expertise with advanced treatments for optimal patient outcomes.",
    fees: 8,
    address: {
      line1: "Central Avenue, Islamabad",
      line2: "Opposite Giga Mall, Islamabad",
    },
  },
  {
    _id: "doc6",
    name: "Dr. Ahmed Ali",
    image: doc6,
    speciality: "Gastroenterologist",
    degree: "MBBS, MD",
    experience: "7 Years",
    about:
      "Dr. Ahmed Ali is a skilled gastroenterologist focused on digestive health. He specializes in treating conditions like ulcers, IBS, and liver diseases, ensuring patient comfort with precise diagnostics and care.",
    fees: 15,
    address: {
      line1: "Mall Road, Lahore",
      line2: "Shadman Area, Lahore",
    },
  },
  {
    _id: "doc7",
    name: "Dr. Yasir Husain",
    image: doc7,
    speciality: "Dermatologist",
    degree: "MBBS, MD, FACC",
    experience: "12 Years",
    about:
      "Dr. Yasir Husain is a dermatology expert with a focus on treating complex skin conditions and enhancing skin aesthetics. He offers advanced treatments for acne, scars, and anti-aging solutions.",
    fees: 5,
    address: {
      line1: "Heart Care Center, Karachi",
      line2: "Near Clifton, Karachi",
    },
  },
  {
    _id: "doc8",
    name: "Dr. Ali Raza",
    image: doc8,
    speciality: "Pediatrician",
    degree: "MBBS, MS Ortho",
    experience: "9 Years",
    about:
      "Dr. Ali Raza combines his orthopedic expertise with pediatric care to address bone and joint conditions in children. His focus is on ensuring pain-free mobility and healthy skeletal development.",
    fees: 10,
    address: {
      line1: "Garden Town, Lahore",
      line2: "Johar Town, Lahore",
    },
  },
  {
    _id: "doc9",
    name: "Dr. Zainab Malik",
    image: doc9,
    speciality: "Gynecologist",
    degree: "MBBS, FCPS Psychiatry",
    experience: "6 Years",
    about:
      "Dr. Zainab Malik provides expert gynecological care and mental health support, ensuring holistic well-being for women. Her compassionate approach addresses both physical and emotional health.",
    fees: 15,
    address: {
      line1: "Psychiatry Clinic, Islamabad",
      line2: "Sector F-11, Islamabad",
    },
  },
  {
    _id: "doc10",
    name: "Dr. Yasir Shah",
    image: doc10,
    speciality: "Neurologist",
    degree: "MBBS, FCPS",
    experience: "5 Years",
    about:
      "Dr. Yasir Shah specializes in diagnosing and managing neurological disorders like stroke and epilepsy. His patient-centered care focuses on improving quality of life through expert treatment plans.",
    fees: 5,
    address: {
      line1: "Downtown Area, Sialkot",
      line2: "Main Circle, Sialkot",
    },
  },
];
