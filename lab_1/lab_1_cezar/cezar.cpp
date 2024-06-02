#include <iostream>
#include <fstream>
#include <string>

using namespace std;

const int ALPH_P = 26;

string encrypt(string text, int offset);
string decrypt(string text, int offset);

int main() {
    setlocale(LC_ALL, "rus");

    string inputPath = "d:\\university\\6 semester\\»—Œ¡\\lab_1\\lab_1_cezar\\input.txt", 
        encryptPath = "d:\\university\\6 semester\\»—Œ¡\\lab_1\\lab_1_cezar\\encrypt.txt",
        decryptPath = "d:\\university\\6 semester\\»—Œ¡\\lab_1\\lab_1_cezar\\decrypt.txt";
    int offset;

    cout << "Enter offset: ";
    cin >> offset;

    fstream inputFile(inputPath, fstream::in | fstream::app);
    if (!inputFile) {
        cout << "Error in input file creating." << endl;
        return 1;
    }
    if (!inputFile.is_open()) {
        cout << "Error in opening input file." << endl;
        return 1;
    }

    ofstream encryptFile(encryptPath);
    if (!encryptFile) {
        cout << "Error in encrypt file creating." << endl;
        return 1;
    }
    if (!encryptFile.is_open()) {
        cout << "Error in opening encrypt file." << endl;
        return 1;
    }

    string text;
    string line;

    while (getline(inputFile, line)) {
        text += line;
    }

    string encryptedText = encrypt(text, offset);

    encryptFile << encryptedText;

    ofstream decryptFile(decryptPath);
    if (!decryptFile) {
        cout << "Error in decrypt file creating." << endl;
        return 1;
    }
    if (!decryptFile.is_open()) {
        cout << "Error in opening decrypt file." << endl;
        return 1;
    }

    string decryptedText = decrypt(encryptedText, offset);

    decryptFile << decryptedText;

    inputFile.close();
    encryptFile.close();
    decryptFile.close();

    cout << "Encrypt done. Result in file: " << encryptPath << endl;
    cout << "Decrypt done. Result in file: " << decryptPath << endl;

    return 0;
}

string encrypt(string text, int offset) {
    string result = "";
    int length = text.length();
    int offsetFormula = (offset % ALPH_P + ALPH_P) % ALPH_P;

    for (int i = 0; i < length; i++) {
        if (isalpha(text[i])) {
            char encryptedChar;

            if (isupper(text[i])) {
                encryptedChar = (text[i] - 'A' + offsetFormula) % ALPH_P + 'A';
            }
            else {
                encryptedChar = (text[i] - 'a' + offsetFormula) % ALPH_P + 'a';
            }
            result += encryptedChar;
        }
        else {
            result += text[i];
        }
    }

    return result;
}

string decrypt(string text, int offset) {
    string result = "";
    int length = text.length();
    int offsetFormula = (offset % ALPH_P + ALPH_P) % ALPH_P;

    for (int i = 0; i < length; i++) {
        if (isalpha(text[i])) {
            char decryptedChar;

            if (isupper(text[i])) {
                decryptedChar = (text[i] - 'A' - offsetFormula + ALPH_P) % ALPH_P + 'A';
            }
            else {
                decryptedChar = (text[i] - 'a' - offsetFormula + ALPH_P) % ALPH_P + 'a';
            }
            result += decryptedChar;
        }
        else {
            result += text[i];
        }
    }

    return result;
}
