pipeline {
    agent any

    environment {
        WEBSITE_NAME = 'DigiLogBook.Landing'
    }

    stages {
        
        stage('Install') {
            steps {
                bat 'corepack enable'
                bat 'corepack prepare pnpm@latest-9 --activate'
                bat 'pnpm install'
            }
        }
        stage('Build') {
            steps {
                bat 'pnpm build'
            }
        }
        stage('Restart IIS App Pool') {
            steps {
                bat "C:/Windows/System32/inetsrv/appcmd.exe recycle apppool /apppool.name:\"$env.WEBSITE_NAME\""
            }
        }
        // stage('Restart IIS Website') {
        //     steps {
        //         sleep(time: 2, unit: "SECONDS")
        //         bat "powershell.exe -Command \"Stop-Website -Name $env.WEBSITE_NAME\""
        //         sleep(time: 4, unit: "SECONDS")
        //         bat "powershell.exe -Command \"Start-Website -Name $env.WEBSITE_NAME\""
        //     }
        // } 
    }
    
    post {
        success {
            echo 'Deployment succeeded!'
        }
        failure {
            echo 'Deployment failed!'
        }
    }
}

