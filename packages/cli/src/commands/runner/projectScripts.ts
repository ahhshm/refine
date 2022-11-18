import { ProjectTypes } from "@definitions/projectTypes";

/**
 * Map `refine` cli commands to project script
 */
export const projectScripts = {
    [ProjectTypes.REACT_SCRIPT]: {
        dev: ["start"],
        start: ["start"],
        build: ["build"],
        getBin: () => `${process.cwd()}/node_modules/.bin/react-scripts`,
    },
    [ProjectTypes.VITE]: {
        dev: ["start"],
        start: ["preview"],
        build: ["build"],
        getBin: () => `${process.cwd()}/node_modules/.bin/vite`,
    },
    [ProjectTypes.NEXTJS]: {
        dev: ["dev"],
        start: ["start"],
        build: ["build"],
        getBin: () => `${process.cwd()}/node_modules/.bin/next`,
    },
    [ProjectTypes.REMIX]: {
        dev: ["dev"],
        start: ["build"],
        build: ["build"],
        getBin: (type: "dev" | "start" | "build") => {
            if (type === "start") {
                return `${process.cwd()}/node_modules/.bin/remix-serve`;
            }

            return "<rootDir>/node_modules/.bin/remix";
        },
    },
};
