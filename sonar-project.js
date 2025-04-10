const scanner = require('sonarqube-scanner');

scanner(
	{
		serverUrl: 'https://your-sonarqube-server.com',
		token: process.env.SONARQUBE_TOKEN,
		options: {
			'sonar.projectKey': 'your-project-key',
			'sonar.projectName': 'Your Project Name',
			'sonar.projectVersion': '1.0.0',
			'sonar.sources': 'src',
			'sonar.language': 'js',
			'sonar.sourceEncoding': 'UTF-8',
			'sonar.javascript.lcov.reportPaths': 'coverage/lcov.info',
		}
	},
	() => process.exit()
);