# Abstract Classifier Trained on The PubMed Dataset

In this project we created an Abstract classifier trained on the PubMed dataset. The model was implementd in tensorflow and the deployment was done using flask. 

## Table of Content
- [Introduction](#introduction)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Usage](#usage)
- [Dataset](#dataset)
- [Model Training](#model-training)
- [Dependencies](#dependencies)


## Introduction
Welcome to our Abstract Classifier project powered by TensorFlow! 🚀

This project demonstrates how to train an Abstract Classifier using TensorFlow on the widely-used PubMed dataset. After successful training, we've deployed the machine learning model using Flask to offer predictions through a user-friendly web interface. Whether you're a developer aiming to build and deploy models or an enthusiast exploring machine learning in web applications, this project provides valuable insights.

Discover how to set up a Flask-based web app, design an intuitive UI, and seamlessly connect it to a PubMed-trained machine learning model.

Join us on this journey, bridging the gap between machine learning and user interaction, and making powerful models accessible to everyone through web technology. Together, we'll turn data into actionable insights!



## Project Structure
- `models/`: Contanins the saved models.
- `static/`: Contains static assets such as CSS and JavaScript files.
- `templates/`: Contains HTML templates.
- `app.py`: The Flask application.
- `prediction.py`: Contains the code for performing prediction
- `model_training.ipynb`: Contains all the code for training the model


## Getting Started

Follow these steps to set up and run the project.

### Prerequisites

- Conda (Miniconda or Anaconda) - [Installation Guide](https://docs.conda.io/projects/conda/en/latest/user-guide/install/index.html)
- Git - [Installation Guide](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

### Installation

1. **Clone the Repository:**

   ```bash
   git clone <repository_url>
   cd project_folder
2. **Create virtual environment**
    ```python
    conda create -n myenv python=3.8
    conda activate myenv
    pip install -r requirements.txt
### Running the Application
1. **Run the Flask Application:**
    ```bash
    python app.py
2. **Access the Application:**
Open a web browser and go to `http://127.0.0.1:5000/` to use the application.

## Usage
- Enter text into the input field on the web page.
- Click the "Classify" button to send a POST request to the Flask server.
- The server uses the tensorflow model to make predictions and displays the results on the web page.


## Dataset
The model used in this project has been trained on the PubMeddataset [PubMed 200k RCT: a Dataset for Sequential Sentence Classification in Medical Abstracts. ](https://arxiv.org/pdf/1710.06071.pdf)
paper using the dataset provided in thier github [page](https://github.com/Franck-Dernoncourt/pubmed-rct)

Abstract
> PubMed 200k RCT is new dataset based on PubMed for sequential sentence classification. The dataset consists of approximately 200,000 abstracts of randomized controlled trials, totaling 2.3 million sentences. Each sentence of each abstract is labeled with their role in the abstract using one of the following classes: background, objective, method, result, or conclusion. The purpose of releasing this dataset is twofold. First, the majority of datasets for sequential short-text classification (i.e., classification of short texts that appear in sequences) are small: we hope that releasing a new large dataset will help develop more accurate algorithms for this task. Second, from an application perspective, researchers need better tools to efficiently skim through the literature. Automatically classifying each sentence in an abstract would help researchers read abstracts more efficiently, especially in fields where abstracts may be long, such as the medical field.

## Model Training

The implentation was based on the Sequential Short-Text Classification with Recurrent and Convolutional Neural Networks [paper](https://arxiv.org/abs/1603.03827)

Abstract
> Recent approaches based on artificial neural networks (ANNs) have shown promising results for short-text classification. However, many short texts occur in sequences (e.g., sentences in a document or utterances in a dialog), and most existing ANN-based systems do not leverage the preceding short texts when classifying a subsequent one. In this work, we present a model based on recurrent neural networks and convolutional neural networks that incorporates the preceding short texts. Our model achieves state-of-the-art results on three different datasets for dialog act prediction.

Details about the model architecture, training process, and performance on the PubMed dataset can be found in the `model_training.ipynb` notebook in this repository.

## Dependencies 
Flask <br>
TensorFlow <br>
NumPy <br>


