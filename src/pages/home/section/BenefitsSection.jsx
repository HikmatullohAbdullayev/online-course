
import BenefitCard from "./components/BenefitCard";
import SectionTop from "./components/SectionTop";



function BenefitsSection() {

  return (
    <section className=" mx-auto mt-100">
      <SectionTop
        title={"Benefits"}
        
      />

      <BenefitCard />
    </section>
  );
}

export default BenefitsSection;
