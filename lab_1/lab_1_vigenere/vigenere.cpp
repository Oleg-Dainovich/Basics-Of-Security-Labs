#include <iostream>
#include <fstream>
#include <string>

using namespace std;

const int ALPH_P = 26;

string encrypt(string text, string offsetStr);
string decrypt(string text, string offsetStr);

int main() {
    setlocale(LC_ALL, "rus");

    string inputPath = "d:\\university\\6 semester\\»—Œ¡\\lab_1\\lab_1_vigenere\\input.txt",
        encryptPath = "d:\\university\\6 semester\\»—Œ¡\\lab_1\\lab_1_vigenere\\encrypt.txt",
        decryptPath = "d:\\university\\6 semester\\»—Œ¡\\lab_1\\lab_1_vigenere\\decrypt.txt";
    string offset;

    cout << "Vigenere Encryption:\nEnter offset: ";
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

string encrypt(string text, string offsetStr) {
    string result = "";
    int length = text.length();
    int keyLength = offsetStr.length();
    int offset;
    int offsetFormula;

    for (int i = 0, symbol = 0; i < length; i++) {
        if (isalpha(text[i])) {
            offset = toupper(offsetStr[symbol % keyLength]) - 'A';
            char encryptedChar;

            if (isupper(text[i])) {
                offsetFormula = (offset % ALPH_P + ALPH_P) % ALPH_P;

                encryptedChar = (text[i] - 'A' + offsetFormula) % ALPH_P + 'A';
            }
            else {
                offsetFormula = (offset % ALPH_P + ALPH_P) % ALPH_P;

                encryptedChar = (text[i] - 'a' + offsetFormula) % ALPH_P + 'a';
            }
            result += encryptedChar;
            symbol++;
        }
        else {
            result += text[i];
        }
    }

    return result;
}

string decrypt(string text, string offsetStr) {
    string result = "";
    int length = text.length();
    int keyLength = offsetStr.length();
    int offset;
    int offsetFormula;

    for (int i = 0, symbol = 0; i < length; i++) {
        if (isalpha(text[i])) {
            offset = toupper(offsetStr[symbol % keyLength]) - 'A';
            char decryptedChar;

            if (isupper(text[i])) {
                offsetFormula = (offset % ALPH_P + ALPH_P) % ALPH_P;

                decryptedChar = (text[i] - 'A' - offsetFormula + ALPH_P) % ALPH_P + 'A';
            }
            else {
                offsetFormula = (offset % ALPH_P + ALPH_P) % ALPH_P;

                decryptedChar = (text[i] - 'a' - offsetFormula + ALPH_P) % ALPH_P + 'a';
            }
            result += decryptedChar;
            symbol++;
        } 
        else {
            result += text[i];
        }
    }

    return result;
}
