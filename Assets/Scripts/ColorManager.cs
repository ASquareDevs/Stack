using UnityEngine;

public static class ColorManager
{
    private static System.Random random = new System.Random();
    private static Color[] platformColors = new Color[3];

    private static int lastPlatformIndex;
    private static int colorsAmount = 0;
    private static int colorBlocks;

    public static Color GetPlatformColor(int platformIndex)
    {
        if (platformIndex == colorsAmount)
        {
            SetPlatformColors(platformIndex);
        }

        return Color.Lerp(
            platformColors[0],
            platformColors[1],
            1.0f / (colorBlocks - 1) * (
                platformIndex - lastPlatformIndex
            )
        );
    }

    public static void SetPlatformColors(int index)
    {
        colorBlocks = random.Next(5, 25);
        colorsAmount += colorBlocks;
        lastPlatformIndex = index;

        platformColors[0] = index == 0
            ? GetRandomColor()
            : platformColors[1];

        platformColors[1] = index == 0
            ? GetRandomColor()
            : platformColors[2];

        platformColors[2] = GetRandomColor();
    }

    public static Color[] GetPlatformColors() =>
        new Color[] { platformColors[0], platformColors[2] };

    private static Color GetRandomColor() =>
        Random.ColorHSV(0.0f, 1.0f, 0.1f, 1.0f, 0.25f, 1.0f);
}
