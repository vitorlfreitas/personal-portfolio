import {
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Divider,
    Image,
    Stack
} from "@chakra-ui/react";
import Technology from "./Technology";

interface CardDetails {
    title: string;
    image: {
        src: string;
        alt: string;
    };
    description: string;
    technologies: string[];
}

interface Props {
    cardDescription: CardDetails;
}

const SkillsCard = ({ cardDescription }: Props) => {


    return (
        <Card
            maxW="sm"
            __css={{
                transition: "transform 250ms ease",
                boxShadow: "md",
                margin: "10px auto",
                padding: "10px 20px",
                overflow: "hidden",
            }}
            _hover={{
                cursor: "pointer",
                transform: "scale(1.03)",
                boxShadow: "0 20px 25px -5px rgb(7 89 133 / 0.1), 0 8px 10px -6px rgb(7 89 133 / 0.1)",

            }}
        >
            <Divider
                className="border-gray-800 dark:border-gray-200 my-2"
             />
            <CardHeader
                __css={{
                    margin: "5px 0",
                }}
            >
                <h3
                    className="text-2xl text-sky-900 font-semibold text-center md:text-lg dark:text-teal-400"
                >
                    {cardDescription.title.toUpperCase()}
                </h3>
            </CardHeader>
            <CardBody>
                <Image
                    src={cardDescription.image.src}
                    alt={cardDescription.image.alt}
                    borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                    <p className="text-xl text-gray-800 md:text-lg dark:text-gray-100">
                        {cardDescription.description}
                    </p>
                </Stack>
            </CardBody>
            <Divider
                className="border-gray-700 dark:border-gray-200 my-2"
             />
            <CardFooter
                __css={{
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <div className="flex gap-2 p-1 flex-wrap">
                    {cardDescription.technologies.map((technology, index) => (
                        <Technology key={index} technology={technology} />
                    ))}
                </div>
            </CardFooter>
            <Divider
                className="border-gray-700 dark:border-gray-200 my-2"
             />

        </Card>
    );
};

export default SkillsCard;
