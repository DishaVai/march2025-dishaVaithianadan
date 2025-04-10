"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/button";
import link from "next/link";
import { Divider } from "@heroui/divider";
import { useState } from "react";

import { title } from "@/components/primitives";

export default function AboutMePage() {
  let facts: string[] = [
    "Java is both the name of a programming language and a name for coffee.",
    "There is a punctuation symbol called the interrobang which is basically a combination of the ? and ! symbols. It looks like this:‽",
    "The first Pokemon game had 151 Pokemon",
    "The company that rates restaurants with Michelin stars is one and the same as the company that makes tires.",
    "The company that makes the Guinness world records is the same as the company that makes beer.",
    "Strings on stringed instruments used to be made out of animal intestines.",
    "Bows for stringed instruments typically use horse hair.",
    "The operating system Windows 98 came before Windows 7 but after Windows 3",
    "India surpassed China as the most populated country in early 2023",
    "Pokemon is a combination of 'pocket' and 'monster.'",
  ];
  const [fact, setFact] = useState("");

  return (
    <div>
      <h1 className={title()}>About Me</h1> <br />
      <br />
      <Button
        className="bg-red-400 text-white"
        onPress={() => {
          setFact(facts[Math.floor(Math.random() * facts.length)]);
        }}
      >
        Press for a Fun Fact!
      </Button>
      <p>{fact}</p>
      <br />
      <Divider className="my-4" />
      <Image alt="me" height={300} src="/IMG_4405.jpeg" width={300} /> <br />
      <p>Hi! My name is Disha and I am a freshman at Skyline High School.</p>
      <br />
      <br />
      <h2 className="text-3xl"> Travel </h2> <br />
      <p>My family and I go traveling a ton! Here are some highlights: </p>
      <br />
      <h3 className="text-2xl"> Paris </h3> <br />
      <div className="flex m-3 border-2 flex-wrap justify-center">
        <Image
          alt="eiffel tower"
          className="m-6 flex"
          height={300}
          src="/tower.png"
          width={300}
        />
        <Image
          alt="View of Paris from the Eiffel Tower"
          className="m-6 flex"
          height={300}
          src="/towerview.jpeg"
          width={500}
        />
      </div>
      <p className="flex">
        In April of 2024 we went to Paris, France! The first picture is a shot
        of the Eiffel Tower from the ground level. The second is a view of the
        river Seine from the top of the Eiffel Tower.
      </p>{" "}
      <br />
      <h3 className="text-2xl">Maui</h3>
      <br />
      <div className="flex m-3 border-2 flex-wrap justify-center">
        <Image
          alt="garden in the island of Maui"
          className="m-6"
          height={300}
          src="/IMG_2806.jpeg"
          width={300}
        />
        <Image
          alt="garden pot"
          className="m-6"
          height={300}
          src="/Pot.jpeg"
          width={300}
        />
        <Image
          alt="flower"
          className="m-6"
          height={300}
          src="/mauiflower.jpeg"
          width={300}
        />
      </div>
      <pre className="flex flex-wrap">
        {" "}
        These are pictures I took on my trip to{" "}
        <Link
          className="text-red-400 flex flex-wrap"
          href="https://www.gohawaii.com/islands/maui"
        >
          {" "}
          Maui
        </Link>
        , an island in Hawaii. Maui has an official travel site.{" "}
      </pre>
      <br />
      {/* Is it okay for a button to replace my link? */}
      <Button
        as={link}
        color="secondary"
        href="https://www.gohawaii.com/islands/maui"
        radius="full"
        size="lg"
      >
        Maui
      </Button>
      <br />
      <br />
    </div>
  );
}
