pipeline {
    agent {
        node {
            label 'master'
        }
    }
    environment {
        GIT_CREDENTIALS = credentials('pasha-goitacad-ssh')
    }
    stages {
        stage('Checkout') {
            steps {
                checkout([
                    $class: 'GitSCM',
                    branches: [[name: '*/main']],
                    userRemoteConfigs: [
                        [url: 'git@github.com:phlebolog/phlebolog.git', credentialsId: 'pasha-goitacad-ssh']
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
