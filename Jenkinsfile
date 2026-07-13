pipeline {
    agent any

    stages {

        stage('Clone') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t tic-tac-toe .'
            }
        }

        stage('Deploy') {
            steps {
                bat 'docker compose down || exit /b 0'
                bat 'docker rm -f tic-tac-toe-container || exit /b 0'
                bat 'docker compose up -d --build'
            }
        }

    }
}