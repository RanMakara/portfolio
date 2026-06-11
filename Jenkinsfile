pipeline {
    agent any
    
    // កំណត់អថេរ (Environment Variables) ដើម្បីងាយស្រួលប្រើ
    environment {
        IMAGE_NAME = "my-awesome-app"
        IMAGE_TAG = "${env.BUILD_NUMBER}" // ប្រើលេខ Build របស់ Jenkins ជា Tag (ឧទាហរណ៍: my-awesome-app:5)
    }

    stages {
        stage('ទាញយកកូដ (Checkout)') {
            steps {
                echo 'កំពុងទាញយកកូដចុងក្រោយពី GitHub...'
                checkout scm
            }
        }
        
        stage('វេចខ្ចប់ (Build Docker Image)') {
            steps {
                echo "កំពុង Build Docker Image: ${IMAGE_NAME}:${IMAGE_TAG}..."
                // ដំណើរការបញ្ជា docker build
                sh 'docker build -t ${IMAGE_NAME}:${IMAGE_TAG} .'
                sh 'docker build -t ${IMAGE_NAME}:latest .' // បង្កើត Tag latest មួយទៀត
            }
        }
        
        stage('ត្រួតពិនិត្យ (Verify Image)') {
            steps {
                echo 'កំពុងត្រួតពិនិត្យមើល Image ដែលទើបតែ Build រួច...'
                sh 'docker image ls | grep ${IMAGE_NAME}'
            }
        }
    }
}
