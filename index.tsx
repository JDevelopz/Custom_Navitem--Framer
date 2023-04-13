// @Copyright --
// Author: Jeffrey Meijer
// Twitter: @Jeffsw0rld_
// @@ Made with React within Framer --- Use for personal and commercial purpose -- Don't Claim as your own.

import * as React from "react"
import { addPropertyControls, ControlType } from "framer"

export default function Custom_Navlink(props: any) {
    const [hover, setHover] = React.useState(false)

    const hoverOnHandler = () => {
        setHover(true)
    }

    const hoverOffHandler = () => {
        setHover(false)
    }

    const fontValue = props.styles.fontWeight || "normal"
    const fontStyle = {
        light: {
            fontWeight: "lighter",
        },
        normal: {
            fontWeight: "normal",
        },
        bold: {
            fontWeight: "bold",
        },
        bolder: {
            fontWeight: "bolder",
        },
    }

    // Navlink default styling
    const style = {
        width: "fit-content",
        height: "fit-content",
        color: !hover ? props.styles.color : props.styles.hoverColor,
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        fontSize: props.styles.fontSize,
        ...fontStyle[fontValue],
    }

    // Value for animation option type. ObjectType.Enum | "a" default value
    const value = props.stylesUnderline.animationType || "a"
    // Value for animation speed option type. ObjectType.Enum | "normal" default value
    const speedValue = props.stylesUnderline.animationSpeed || "normal"
    //Animation speed option CSS variables
    const speed = {
        slow: {
            transition: "left 0.6s ease 0s, width 0.6s ease 0s",
        },
        normal: {
            transition: "left 0.3s ease 0s, width 0.3s ease 0s",
        },
        fast: {
            transition: "left 0.1s ease 0s, width 0.1s ease 0s",
        },
    }
    // Animation option CSS variables.
    const animation = {
        a: {
            left: "0",
            width:
                hover || props.stylesUnderline.previewUnderline ? "100%" : "0",
            ...speed[speedValue],
        },
        b: {
            left: hover || props.stylesUnderline.previewUnderline ? "0" : "50%",
            width:
                hover || props.stylesUnderline.previewUnderline ? "100%" : "0",
            ...speed[speedValue],
        },
        c:
            hover || props.stylesUnderline.previewUnderline
                ? {
                      left: "0",
                      width:
                          hover || props.stylesUnderline.previewUnderline
                              ? "100%"
                              : "0",
                      ...speed[speedValue],
                  }
                : {
                      right: "0",
                      width:
                          hover || props.stylesUnderline.previewUnderline
                              ? "100%"
                              : "0",
                      ...speed[speedValue],
                  },
        d: {
            right: "0",
            width:
                hover || props.stylesUnderline.previewUnderline ? "100%" : "0%",
            transition: "right 0.3s ease 0s, width 0.3s ease 0s",
        },
    }

    const underline = {
        background: "none repeat scroll 0 0 transparent",
        bottom: "0",
        content: '""',
        display: "block",
        height: props.stylesUnderline.underlineHeight,
        ...animation[value],
        position: "absolute",
        top: props.stylesUnderline.underlineDistance,
        backgroundImage: `linear-gradient(to right, ${
            props.stylesUnderline.underlineColor
        }, ${
            props.stylesUnderline.addColorTwo
                ? `${props.stylesUnderline.colorTwo}`
                : `${props.stylesUnderline.underlineColor}`
        }, ${
            props.stylesUnderline.addColorThree
                ? `${props.stylesUnderline.colorThree}`
                : `${props.stylesUnderline.underlineColor}`
        })`,
        borderRadius: props.stylesUnderline.underlineBorder,
        zIndex: 10,
    }

    // Link styling
    const linkStyle = {
        position: "relative",
        color: "inherit",
        opacity: props.styles.fontOpacity,
        textDecoration: "none",
        zIndex: "1000",
    }

    const target = props.openNewTab ? "_blank" : "_self"

    return (
        <div
            style={style}
            onMouseOver={hoverOnHandler}
            onMouseOut={hoverOffHandler}
        >
            <a
                style={linkStyle}
                href={`${props.link}`}
                alt={props.text}
                target={target}
                rel="noreferrer"
            >
                {props.text}
            </a>
            <div style={underline} />
        </div>
    )
}

Custom_Navlink.defaultProps = {
    text: "Home",
}

addPropertyControls(Custom_Navlink, {
    text: {
        type: ControlType.String,
        title: "Link name",
        placeholder: "Home, Blog, Contact, ect",
    },
    link: {
        type: ControlType.String,
        title: "Navigate to",
        placeholder: "/route or url",
    },
    openNewTab: {
        type: ControlType.Boolean,
        title: "Open in new tab",
        defaultValue: false,
    },
    styles: {
        title: "Font",
        type: ControlType.Object,
        controls: {
            color: {
                type: ControlType.Color,
                title: "Text Color",
                defaultValue: "#000000",
            },
            hoverColor: {
                type: ControlType.Color,
                title: "On Hover",
                defaultValue: "#000000",
            },
            fontOpacity: {
                type: ControlType.Number,
                title: "Opacity",
                defaultValue: 1,
                min: 0,
                max: 1,
                step: 0.1,
                displayStepper: true,
            },
            fontSize: {
                type: ControlType.Number,
                title: "Fontsize",
                defaultValue: 16,
                min: 0,
                max: 96,
                unit: "px",
                step: 1,
                displayStepper: true,
            },
            fontWeight: {
                type: ControlType.Enum,
                title: "Font Weight",
                defaultValue: "normal",
                displaySegmentedControl: true,
                segmentedControlDirection: "vertical",
                options: ["light", "normal", "bold", "bolder"],
                optionTitles: ["light", "normal", "bold", "bolder"],
            },
        },
    },
    stylesUnderline: {
        title: "Underline",
        type: ControlType.Object,
        controls: {
            underlineColor: {
                type: ControlType.Color,
                title: "Underline color",
                defaultValue: "#000000",
            },
            addColorTwo: {
                type: ControlType.Boolean,
                title: "Add Color",
                defaultValue: false,
            },
            colorTwo: {
                type: ControlType.Color,
                title: "Color Two",
            },
            addColorThree: {
                type: ControlType.Boolean,
                title: "Add Color",
                defaultValue: false,
            },
            colorThree: {
                type: ControlType.Color,
                title: "Color Three",
            },
            underlineHeight: {
                type: ControlType.Number,
                title: "Height",
                defaultValue: 2,
                min: 1,
                max: 96,
                step: 1,
                unit: "px",
                displayStepper: true,
            },
            underlineDistance: {
                type: ControlType.Number,
                title: "Distance",
                defaultValue: 18,
                min: -50,
                max: 100,
                unit: "px",
                step: 1,
                displayStepper: true,
            },
            underlineBorder: {
                type: ControlType.Number,
                title: "Border",
                defaultValue: 0,
                min: 0,
                max: 50,
                unit: "%",
                step: 1,
                displayStepper: true,
            },
            previewUnderline: {
                type: ControlType.Boolean,
                title: "Preview",
                defaultValue: false,
                enabledTitle: "On",
                disabledTitle: "Off",
            },
            animationType: {
                type: ControlType.Enum,
                title: "Animation",
                defaultValue: "a",
                displaySegmentedControl: true,
                segmentedControlDirection: "horizontal",
                options: ["a", "b", "c", "d"],
                optionTitles: ["Start", "Middle", "Start-end, End"],
            },
            animationSpeed: {
                type: ControlType.Enum,
                title: "Speed",
                defaultValue: "normal",
                displaySegmentedControl: true,
                segmentedControlDirection: "horizontal",
                options: ["slow", "normal", "fast"],
                optionTitles: ["slow", "normal", "fast"],
            },
        },
    },
})
