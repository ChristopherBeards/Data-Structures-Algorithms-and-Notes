# Sorting Algorithms

## Overview
A sorting algorithm is `an algorithm that puts elements of a list in a certain order.` Efficient sorting is important for optimizing the use of other algorithms (such as search and merge algorithms) which require input data to be in sorted lists; it is also often useful for producing human-readable output. | [Source](https://en.wikipedia.org/wiki/Data_structure)

### Bubble Sort

Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that `repeatedly steps through the list to be sorted, compares each pair of adjacent items and swaps them if they are in the wrong order.` The pass through the list is repeated until no swaps are needed, which indicates that the list is sorted. The algorithm, which is a comparison sort, is named for the way smaller or larger elements "bubble" to the top of the list. Although the algorithm is simple, it is too slow and impractical for most problems even when compared to insertion sort. Bubble sort can be practical if the input is in mostly sorted order with some out-of-order elements nearly in position. | [Source](https://en.wikipedia.org/wiki/Bubble_sort)

### Selection Sort
Selection sort is an in-place comparison-based algorithm in which the list is divided into two parts, the sorted part at the left end and the unsorted part at the right end. Initially, the sorted part is empty and the unsorted part is the entire list.

The smallest element is selected from the unsorted array and swapped with the leftmost element, and that element becomes a part of the sorted array. This process continues moving unsorted array boundary by one element to the right. | [Source](https://www.tutorialspoint.com/data_structures_algorithms/selection_sort_algorithm.htm)
### Merge Sort
Merge sort is a divide and conquer technique which first divides the array into equal halves and then combines them in a sorted manner.