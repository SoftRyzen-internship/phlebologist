pipeline {
    agent {
        node {
            label 'master'
        }
    }
    stages {
        stage('Checkout') {
            steps {
                checkout([
                    $class: 'GitSCM',
                    branches: [[name: '*/main']],
                    userRemoteConfigs: [
                        [url: 'git@github.com:phlebolog/phlebolog.git', credentialsId: 'goweb-artfull']
                    ]
                ])
            }
        }
        stage('Echo') {
            steps {
                echo 'Testing of the connection'
            }
        }
    }
}
