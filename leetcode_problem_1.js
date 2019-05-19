/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var search
    var search2
    var finished = 0
    var answer
    for (search = 0; search < nums.length; search++)
        {
            for (search2 = 0; search2 < nums.length; search2++)
                {
                    //Make sure we aren't adding the same index number twice
                    //Boolean "finished" to make sure we only have one solution
                    if (finished == 0 && search != search2)
                        {
                            if (nums[search]+nums[search2] == target)
                                {
                                    //console.log((nums[search]+nums[search2]))
                                    finished = 1
                                    answer = [search,search2]
                                }
                                    //    console.log([search,search2])
                            
                                //return([search,search2])
                        }
                }
            
        }
    return(answer)
    };