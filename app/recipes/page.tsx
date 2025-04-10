import Image from "next/image";

import { title } from "@/components/primitives";

export default function RecipesPage() {
  return (
    <div>
      <h1 className={title()}>Recipes</h1> <br /> <br />
      <p>Learn a multitude of delicious recipes from various sources</p>
      <br />
      <br />
      <h2 className="text-3xl">
        <b>Vegetarian Panini</b>
      </h2>{" "}
      <br /> <br />
      <Image
        alt="a sandwich"
        className="border-3"
        height={300}
        src="/sandwich.png"
        width={400}
      />
      <br /> <br />
      <h3 className="text-xl">How do you make this treat?</h3> <br />
      <p>
        Find the recipe{" "}
        <a href="https://theliveinkitchen.com/cheesy-hummus-veggie-panini/">
          <b>here</b>
        </a>
        .
      </p>{" "}
      <br />
      <h3 className="text-2xl">
        <b>Ingredients</b>
      </h3>{" "}
      <br />
      <br />
      <div className="flex flex-wrap text-xl justify-center border-2">
        <p className="m-6 bg-blue-500">2 Slices of Bread</p>
        <p className="m-6 bg-cyan-500">8 tsp. Hummus</p>
        <p className="m-6 bg-pink-500">2 Slices Mozarrella Cheese</p>
        <p className="m-6 bg-blue-500">Garlic and Balsamic Grape Tomatoes</p>
        <p className="m-6 bg-cyan-500">1/3 Cup Baby Spinach</p>
        <p className="m-6 bg-pink-500">Olive Oil</p>
      </div>
      <br />
      <br />
      <h3 className="text-2xl">
        <b>Instructions</b>
      </h3>
      <ol>
        <li>Preheat the panini press to 400F</li>
        <li>Put hummus on the bottom half of the sandwich</li>
        <li>Put a slice of mozarella cheese on top of the hummus</li>
        <li>Top the cheese with five or six tomatoes</li>
        <li>Subsequently, place the spinach on the sandwich</li>
        <li>Add the second slice of mozarlla</li>
        <li>Top the sandwich with the remaining slice of bread</li>
        <li>Put the sandwich in the panini press</li>
        <li>Drizzle olive oil on the top</li>
        <li>Cook for five minutes or until cheese has melted</li>
      </ol>{" "}
      <br />
      <br />
      <br />
    </div>
  );
}
