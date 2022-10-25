import { NextPage } from "next";
import QuestionBox from "./question_box";

interface Props {
    title: string;
    questions: qa[];
}

interface qa {
    id: number;
    question: string;
    answer: string;
}

const CategoryBox: NextPage<Props> = (props) => {
    return (
        <div className="box-border border-2 mx-auto w-80 rounded-2xl p-2 bg-white/10">
            <div className="font-medium text-white">
                {props.title}
            </div>
            {props.questions.map(qa => (<QuestionBox key={qa.id} question={qa.question} answer={qa.answer} />))}
        </div>
    );
}

export default CategoryBox;