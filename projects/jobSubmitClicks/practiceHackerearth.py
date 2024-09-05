



def generate_anagrams(s):
    dict = {}
    for i in s:
        anagram = "".join(sorted(i))
        if anagram in dict:
            dict[anagram].append(i)
        else:
            dict[anagram] = [i]
    return dict.values()

s = ["cat", "dog", "tac", "god", "act"]
print(generate_anagrams(s))

def is_anagram(s1, s2):
    return sorted(s1) == sorted(s2)
s1 = "listen"
s2 = "silent"
print(is_anagram(s1, s2))

def is_prime(n):
    if n == 1:
        return False
    for i in range(2, int(n**0.5)+1):
        if n % i == 0:
            return False
    return True