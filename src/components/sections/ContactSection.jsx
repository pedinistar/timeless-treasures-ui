import React from "react";
import manStatue from "../../assets/man-statue.png";
import mail from "../../assets/mail.png";
import facebook from "../../assets/facebook.png";
import insta from "../../assets/insta.png";
import twitter from "../../assets/twitter.png";
import Logo from "../ui/Logo";
import Input from "../ui/Input";
import Button from "../ui/Button";
import Heading from "../ui/Heading";

const ContactSection = () => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center py-20 relative gap-20">
      <Heading text="Contact" secText="Write to us" />
      <div className="w-[80%] flex justify-evenly">
        <div className="left flex flex-col items-center justify-center">
          <img src={manStatue} alt="A man statue." width={430} />
          <div className="flex gap-8">
            <Logo img={mail} alt="Mail Icon." />
            <Logo img={facebook} alt="Facebook Icon." />
            <Logo img={insta} alt="Instagram Icon." />
            <Logo img={twitter} alt="Twitter Icon." />
          </div>
        </div>
        <div className="right w-[30%] mt-10 flex flex-col gap-6 items-center">
          <Input type="text" placeholder="Name" />
          <Input type="text" placeholder="Email" />
          <textarea
            className="input-style flex-grow resize-none w-full h-full"
            placeholder="Message"
          ></textarea>
          <Button path="/send" text="Send" rootClassName="w-fit" />
        </div>
      </div>
      <p className="absolute bottom-10 font-primary text-light">
        © 2025 Jayashree Pedini | Timeless Treasure | Crafted with ♡ and ⚛
      </p>
    </section>
  );
};

export default ContactSection;
