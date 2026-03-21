import * as z from "zod";
import { useEffect, useState } from "react";

const MealsCheck = z.object({
  strMeal: z.string(),
  strInstructions: z.string(),
});
const MealsCheckArray = z.array(MealsCheck);

type Meals = z.infer<typeof MealsCheckArray>;

export default function Recipe() {
  const [meal, setMeal] = useState<Meals>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMeal = async () => {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/random.php",
        );
        if (!response.ok) {
          throw new Error("impossibru!");
        }
        const data = await response.json();

        const validResult = MealsCheckArray.safeParse(data.meals);

        if (!validResult.success) {
          console.log("Validation error:", validResult.error);
          return;
        }
        console.log(validResult.data);
        setMeal(validResult.data)
      } catch (error) {
        setError("Villa kom upp :(");
      } finally {
        setLoading(false);
      }
    };
    fetchMeal();
  }, []);

  if (loading) return <p>Sæki...</p>;
  if (error) return <p>Villa: {error}</p>;
  return (
    <>
      <h3>MEALS:</h3>
      <div>
        {meal.map((meal, i) => (
          <div key={i}>
            <h3>{meal.strMeal}</h3>
            <p>{meal.strInstructions}</p>
          </div>
        ))}
        {error && <div>{error}</div>}
      </div>
    </>
  );
}
