import execa from "execa";

export const runScript = async (binPath: string, args: string[]) => {
    try {
        const execution = execa(binPath, args, {
            stdio: "inherit",
        });

        execution.on("message", (message) => {
            console.log(message);
        });

        execution.on("error", (error) => {
            console.log(error);
        });

        execution.on("exit", (exitCode) => {
            if (exitCode === 0) {
                console.log("All `refine` packages updated  🎉");
                return;
            }

            console.log(`Application exited with code ${exitCode}`);
        });
    } catch (error: any) {
        throw new Error(error);
    }
};
