const scanner = require("sonarqube-scanner");
scanner(
    {
        serverUrl: "http://localhost:9000",
        token: "squ_6930227a62668b4ea0c346c05df8f67c9ade8a4d",
        options: {
            "sonar.sources": "./src",
            "sonar.exclusions": "**/*.test.tsx",
            "sonar.tests": "./src",
            "sonar.test.inclusions": "**/*.test.tsx,**/*.test.ts",
            "sonar.typescript.lcov.reportPaths": "coverage/lcov.info",
            "sonar.testExecutionReportPaths": "test-report.xml"
        },
    },
    () => process.exit()
);