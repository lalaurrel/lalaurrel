#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

char* solution(const char* my_string, const char* overwrite_string, int s) {
   int len = strlen(my_string);
   char* answer = (char*)malloc(len + 1);
   strcpy(answer, my_string);
   
   for(int i = 0; i < strlen(overwrite_string); i++) {
       answer[s + i] = overwrite_string[i];
   }
   
   return answer;
}