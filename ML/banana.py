import cv2
import numpy as np
import tensorflow as tf

# Load the Keras model
model = tf.keras.models.load_model('banana_health_classifier_mobilenet.h5')

# Set up the camera
cap = cv2.VideoCapture(0)  # Use 0 for the default camera

def preprocess_image(image):
    resized = cv2.resize(image, (224, 224))
    normalized = resized / 255.0
    input_data = np.expand_dims(normalized, axis=0)
    return input_data

def classify_image(input_data):
    prediction = model.predict(input_data)
    return "Healthy" if prediction[0][0] > 0.5 else "Unhealthy"

def detect_banana_stem(image):
        # Convert the image to HSV color space
        hsv = cv2.cvtColor(image, cv2.COLOR_BGR2HSV)

        # Define the color range for the banana stem
        lower_brown = np.array([10, 100, 20])
        upper_brown = np.array([30, 255, 200])

        # Create a binary mask where the brown colors are white
        mask = cv2.inRange(hsv, lower_brown, upper_brown)

        # Find contours in the mask
        contours, _ = cv2.findContours(mask, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)

        for contour in contours:
            # Get the bounding box of the contour
            x, y, w, h = cv2.boundingRect(contour)
            if w > 50 and h > 50:  # Assuming a minimum size for the banana stem
                return True, x, y, w, h
        return False, None, None, None, None

try:
    while True:
        # Capture frame from the camera
        ret, frame = cap.read()
        if not ret:
            print("Failed to grab frame")
            break

        detected, x, y, w, h = detect_banana_stem(frame)

        if detected:
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