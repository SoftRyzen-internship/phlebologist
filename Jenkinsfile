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
        stage('Build') {
            steps {
                sh './build.sh'
            }
        }
        stage('Deploy to FTP') {
            steps {
                script {
                    ftpPublisher alwaysPublishFromMaster: true, continueOnError: false, failOnError: true, publishers: [
                        [configName: 'ftp_webuzo_phlebolog', transfers: [
                            [asciiMode: false, cleanRemote: false, excludes: '', flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remote: 'root/phlebolog', remoteDirectorySDF: false, removePrefix: '', sourceFiles: 'test.txt']
                        ], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: true]
                    ]
                }
            }
        }
    }
}
