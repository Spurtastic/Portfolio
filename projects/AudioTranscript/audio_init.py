import sounddevice as sd
from scipy.io.wavfile import write
import wavio as wv

def record_audio(freq, duration, filename):
    fs = freq
    seconds = duration
    myrecording = sd.rec(int(seconds * fs), samplerate=fs, channels=2, dtype='int16')
    sd.wait()
    write(filename, fs, myrecording)
    print("Recording complete")

record_audio(48100, 5, 'output.wav')