/*As created in section 3 of Modern React From the Beginning with Brad Travers
BUT updated to Typscript and nested into a ShadCn Card component*/
import "./ratingUi.css";
import Rating from "./components/Rating";
import { Card, CardContent } from "@/shared/components/ui/card";

const RatingUi = () => {
  return (
    <>
      <Card className="bg-[#0080ff]">
        <CardContent>
          <Rating
            heading="How do you feel about React?"
            feedbackMessages={[
              "Hate it",
              "Dislike it",
              "Meh",
              "Like it",
              "Love it",
            ]}
          />
        </CardContent>
      </Card>
    </>
  );
};

export default RatingUi;
