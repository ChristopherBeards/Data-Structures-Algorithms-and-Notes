
/* Quick Sort
 This sorting algorithm falls into the category of a divide and conquer algorithm, which means that it breaks a problem into subproblems that are similar to the original problem, recursively solves the subproblems, and finally combines the solutions to the subproblems to solve the original problem.
 */

void quick_sort(int arr[], int low, int high)
{
  int i, j, pivot, temp;

  if (low < high)
  {
    // ! Pivot Point
    pivot = low; // * Lowest Index
    // ! Left and Right Pointers
    i = low;  // * Lowest Value
    j = high; // * Array Length

    // * While the left pointer is still lowest, do something
    while (i < j)
    {
      // * While the value at `i` is smaller than the `pivot`
      // * and `i` is less than the array length, increment `i`
      while (arr[i] <= arr[pivot] && i < high)
        i++;
      // * While the right most element is larger than the
      // * pivot point, move the pointer to the left
      while (arr[j] > arr[pivot])
        j--;
      // * If `i` is still less than `j`
      // * Once we've found values that don't meet our criteria
      // * Swap them
      if (i < j)
      {
        temp = arr[i];   // * `i` Higher Value (Left)
        arr[i] = arr[j]; // * `j` Lower Value (Right)
        arr[j] = temp;   // * Higher Value
      }
    }
    /* Swap Pivot Point
      Pivot was initially the left most value which we compared
      to. Once we discovered a higher value and stored that value in `j`, we can move the pivot point forward to that location.
      */
    temp = arr[pivot];
    arr[pivot] = arr[j];
    arr[j] = temp;
    quick_sort(arr, low, j - 1);  // * Sort Left of Pivot
    quick_sort(arr, j + 1, high); // * Sort Right of Pivot
  }
}

void print_array(int arr[], int size)
{
  for (int i = 0; i < size; i++)
  {
    printf("%d\n", arr[i]);
  }
}

int main(int argc, char *argv[])
{
  int arr[] = {100, 55, 4, 98, 10, 18, 90, 95, 43, 11, 47, 67, 89, 42, 49, 79};
  int n = sizeof(arr) / sizeof(arr[0]);
  quick_sort(arr, 0, n - 1);
  print_array(arr, n);
  return 0;
}