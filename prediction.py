import tensorflow as tf
import numpy as np

model = tf.keras.models.load_model("./models/Best_model")
data_labels = ['BACKGROUND', 'CONCLUSIONS', 'METHODS', 'OBJECTIVE', 'RESULTS']

def model_predict(abstract):

    abstract = np.array(abstract)

    shape = abstract.shape

    labels = tf.data.Dataset.from_tensor_slices(["" for i in range(shape[0])])

    sentences = tf.data.Dataset.from_tensor_slices((abstract[:, 0], abstract[:, 1], abstract[:, 2]))

    dataset = tf.data.Dataset.zip(sentences, labels)

    dataset = dataset.batch(1)

    predict_proba = model.predict(dataset, verbose = 0)

    predictions = predict_proba.argmax(axis = 1)

    pred_labels = [data_labels[pred] for pred in predictions]

    return pred_labels