import "./EveAvatar.css";

interface EveAvatarProps {

    name: string;

    image?: string;

    size?: number;

}

const colors = [
    "#6D28D9",
    "#2563EB",
    "#059669",
    "#EA580C",
    "#DC2626",
    "#7C3AED",
    "#0891B2",
];

const EveAvatar = ({
    name,
    image,
    size = 44,
}: EveAvatarProps) => {

    const initials = name
        .split(" ")
        .slice(0,2)
        .map(word => word[0])
        .join("")
        .toUpperCase();

    const color =
        colors[
            name.length % colors.length
        ];

    if(image){

        return(

            <img
                src={image}
                alt={name}
                className="eve-avatar"
                style={{
                    width:size,
                    height:size,
                }}
            />

        );

    }

    return(

        <div
            className="eve-avatar"
            style={{
                width:size,
                height:size,
                background:color,
            }}
        >

            {initials}

        </div>

    );

};

export default EveAvatar;