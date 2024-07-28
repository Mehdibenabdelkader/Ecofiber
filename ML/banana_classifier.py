import cv2
import numpy as np
import tensorflow as tf

# Load the TFLite model
interpreter = tf.lite.Interpreter(model_path="banana_health_classifier_mobilenet.tflite")
interpreter.allocate_tensors()

# Get input and output tensors
input_details = interpreter.get_input_details()
output_details = interpreter.get_output_details()

# Set up the camera
cap = cv2.VideoCapture(0)  # Use 0 for the default camera

def preprocess_image(image):
    resized = cv2.resize(image, (224, 224))
    normalized = resized / 255.0
    input_data = np.expand_dims(normalized, axis=0).astype(np.float32)
    return input_data

def classify_image(input_data):
    interpreter.set_tensor(input_details[0]['index'], input_data)
    interpreter.invoke()
    output = interpreter.get_tensor(output_details[0]['index'])
    return "Healthy" if output[0][0] > 0.5 else "Unhealthy"

try:
    while True:
        # Capture frame from the camera
        ret, frame = cap.read()
        if not ret:
            print("Failed to grab frame")
            break

        # Preprocess the frame
        input_data = preprocess_image(frame)

        # Classify the image
        result = classify_image(input_data)

        # Display the result on the frame
        cv2.putText(frame, f"Banana: {result}", (10, 30),
                    cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)

        # Display the frame
        cv2.imshow("Banana Health Classification", frame)

        # Break the loop if 'q' is pressed
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

finally:
    # Clean up
    cap.release()
    cv2.destroyAllWindows()