import time
import pyautogui
import os
import re


daily_text = os.path.abspath("c:\\Users\\admin\\Documents\\MyLearning\\06 - Daily\\20240619.md")
apply_cf = os.path.abspath('.\submissionCount\imgs\Apply.png')
apply_el = os.path.abspath('.\submissionCount\imgs\easy_apply.png')
GLOBAL_COUNT = 37 # reset everyday

def update_count_in_md(filepath, new_count, total_count=100):
    with open(filepath, 'r') as file:
        content = file.read()
        
    updated_content = re.sub(r'(\[\s*\]\s*Job Applications\s*)(\d+)/(\d+)', r'[ ] Job Applications {}/{}'.format(new_count, total_count), content)
    print(updated_content)
    with open(filepath, 'w') as file:
        file.write(updated_content)
        
        
# update_count_in_md(daily_text, 20) 
    
def locate_submit_and_count(filepath):
    click_count = GLOBAL_COUNT
    while True:
        try:
            # Locate the image on the screen with adjusted confidence level
            submit_text = pyautogui.locateOnScreen(filepath, confidence=0.9)
            x,y = pyautogui.locateCenterOnScreen(filepath, confidence=0.9)
            if submit_text:
                print("Image found:", submit_text)
                pyautogui.click(x, y)
                click_count += 1
                update_count_in_md(daily_text, click_count)
            else:
                raise pyautogui.ImageNotFoundException("Image not found on the screen.")
        except pyautogui.ImageNotFoundException:
            print("The image could not be found on the screen. Please check the following:")
            print("- Ensure the image file path is correct.")
            print("- Ensure the image is visible on the screen.")
            print("- Try lowering the confidence level.")
            print("- Check if the image is on the correct screen.")
        except Exception as e:
            print(f"An error occurred: {e}")
        print(f"Number of clicks: {click_count}")
        print("Waiting for 10 seconds...")
        time.sleep(10)


# locate_submit_and_count(file_path)
locate_submit_and_count(apply_el)