/// Check If It Is a Straight Line
public class Solution
{
  public bool CheckStraightLine(int[][] coordinates)
  {

    double slope = Math.Abs(
        (double)(coordinates[0][0] - coordinates[1][0])
        /
        (double)(coordinates[0][1] - coordinates[1][1])
    );

    for (int i = 2; i < coordinates.Length; i++)
    {
      if (slope != Math.Abs(
          (double)(coordinates[0][0] - coordinates[i][0])
          /
          (double)(coordinates[0][1] - coordinates[i][1])
      ))
      {
        return false;
      }
    }

    return true;
  }
}