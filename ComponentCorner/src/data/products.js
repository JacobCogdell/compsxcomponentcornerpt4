import cpuImage from "../assets/cpu.png";
import airpodsImage from "../assets/airpods.png";
import caseImage from "../assets/case.png";
import mobileImage from "../assets/mobile.png";
import motherboardImage from "../assets/motherboard.png";
import genericImage from "../assets/generic.png";

const products = [
  {
    id: 1,
    name: "CPU",
    price: 199.99,
    image: cpuImage,
    description: "High‑performance processor."
  },
  {
    id: 2,
    name: "GPU",
    price: 499.99,
    image: genericImage,
    description: "Powerful graphics card."
  },
  {
    id: 3,
    name: "Motherboard",
    price: 149.99,
    image: motherboardImage,
    description: "ATX motherboard with PCIe 5.0 support."
  },
  {
    id: 4,
    name: "Case",
    price: 99.99,
    image: caseImage,
    description: "Mid-tower case with good airflow."
  },
  {
    id: 5,
    name: "AirPods",
    price: 199.99,
    image: airpodsImage,
    description: "Wireless earbuds with active noise cancellation."
  },
  {
    id: 6,
    name: "Mobile Phone",
    price: 699.99,
    image: mobileImage,
    description: "Latest smartphone with advanced features."
  }
];

export default products;
