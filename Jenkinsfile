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
        stage('Restart IIS Website') {
            steps {
                bat "powershell.exe -Command "Start-Website -Name '$env.WEBSITE_NAME'""
                bat "powershell.exe -Command "Stop-Website -Name '$env.WEBSITE_NAME'""
            }
        } 
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

