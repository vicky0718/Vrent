module.export {
    apps: [
        {
            name: "project-management",
            script: "npm",
            args: "ren dev",
            env: {
                NODE_ENV: "development"
            }
        }
    ]
}